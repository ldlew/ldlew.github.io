import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

// Defining schema
const characterSchema = new Schema({
    characterName:  String,

    user:  String,
    createdAt: { type: Date, default: Date.now },
    postCount: { type: Number, default: 0 },
    level: { type: Number, default: 0 },

    group: String,
    type: String,
    
    health: { type: Number, default: 10 },
    armor: { type: Number, default: 10 },
    hitDice: { type: Number, default: 10 },
    speed: { type: Number, default: 10 },

    STR: { type: Number, default: 0 },
    DEX: { type: Number, default: 0 },
    CON: { type: Number, default: 0 },
    WIS: { type: Number, default: 0 },
    INT: { type: Number, default: 0 },
    CHA: { type: Number, default: 0 },

    selectedFile: String,
});

var Character = mongoose.model('Character', characterSchema);
export default Character;