import express from 'express';
import mongoose from 'mongoose';

import Character from '../models/character.js';

const router = express.Router();

// GET ALL CHARACTERS...
export const getCharacters = async (req, res) => { 
    try {
        const characters = await Character.find()
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// FIND CHARACTER BY ID...
export const getCharacter = async (req, res) => { 
    const { id } = req.params;

    try {
        const character = await Character.findById(id);
        res.status(200).json(character);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// CREATE A CHARACTER...
export const createCharacter = async (req, res) => {
    const { characterName, user, group, type, STR, DEX, CON, WIS, INT, CHA, postCount, selectedFile } = req.body;

    const newCharacter = new Character({ characterName, user, group, type, STR, DEX, CON, WIS, INT, CHA, postCount, selectedFile })

    // Initial armor is dexterity + default 10.
    newCharacter.armor = newCharacter.armor + newCharacter.DEX;
    // Initial health is a hit dice roll + default 10 + CON
    newCharacter.health = newCharacter.health + Math.floor(Math.random() * (newCharacter.hitDice + 1)) + newCharacter.CON;

    try {
        await newCharacter.save();
        res.status(201).json(newCharacter);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// UPDATE A CHARACTER...
export const updateCharacter = async (req, res) => {
    const { id } = req.params;
    const { characterName, user, group, type, STR, DEX, CON, WIS, INT, CHA, postCount, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedCharacter = { characterName, user, group, type, STR, DEX, CON, WIS, INT, CHA, postCount, selectedFile, _id: id };

    await Character.findByIdAndUpdate(id, updatedCharacter, { new: true });

    res.json(updatedCharacter);
}

// DELETE CHARACTER...
export const deleteCharacter = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No character with id: ${id}`);

    await Character.findByIdAndRemove(id);

    res.json({ message: "Character deleted successfully." });
}

// LEVEL CHARACTER...
export const calculateLevel = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No character with id: ${id}`);
    
    const character = await Character.findById(id);

    // Calculate level by post count...
    let updatedCharacter = await Character.findByIdAndUpdate(id, { level: parseInt((3 * (character.postCount ^ 2)) / 5) }, { new: true });

    // Track the number of levelUps that took place in order to determine the amount of health that needs to be added.
    let levelUps = 0;
    let addedHealth = 0;

    if (character.level != updatedCharacter.level)
    {
        levelUps = updatedCharacter.level - character.level;
        for (let i = 0; i < levelUps; i++) {
            addedHealth += Math.floor(Math.random() * (character.hitDice + 1));
            addedHealth += character.CON;
        }
        updatedCharacter = await Character.findByIdAndUpdate(id, { health: parseInt(character.health + addedHealth) }, { new: true });
    }
    res.json(updatedCharacter);
}