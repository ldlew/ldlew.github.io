import express from 'express';

import { getCharacters, getCharacter, createCharacter, deleteCharacter, calculateLevel, updateCharacter } from '../controllers/characters.js';

const router = express.Router();

router.get('/', getCharacters);
router.post('/', createCharacter);
router.get('/:id', getCharacter);
router.patch('/:id', updateCharacter);
router.delete('/:id', deleteCharacter);
router.patch('/:id/calculateLevel', calculateLevel);

export default router;