import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './styles.css'
import { calculateLevel, deleteCharacter } from '../../../actions/characters';

const Character = ( {character, setCurrentId} ) => {
    const dispatch = useDispatch();
    return (
    <div className="card">
        <div className="mediaWrap">
            <img className="media" src={character.selectedFile}></img>
        </div>

        <div className="rowOne">
            <div className="characterInformation">
                <div className="name">
                    <h5>Character Name</h5>
                    <h3>{character.characterName}</h3>
                </div>
            </div>
            <div className="infoWrap">
                <div className="group">
                    <h5>Group</h5>
                    <h3>{character.group}</h3>
                </div>
                <div className="type">
                    <h5>Class</h5>
                    <h3>{character.type}</h3>
                </div>
                <div className="level">
                    <h5>Level</h5>
                    <h3>{character.level}</h3>
                    </div>
            </div>
            <div className="statsWrap">
                <div className="health">
                    <h5>HP</h5>
                    <h3>{character.health}</h3>
                </div>
                <div className="armor">
                    <h5>AP</h5>
                    <h3>{character.armor}</h3>
                </div>
                <div className="speed">
                    <h5>Speed</h5>
                    <h3>{character.speed}</h3>
                </div>
                <div className="hitDice">
                    <h5>Dice</h5>
                    <h3>{character.hitDice}</h3>
                </div>
            </div>
            <div className="dndWrap">
                <div className="str">
                    <h5>STR</h5>
                    <h3>{character.STR}</h3>
                </div>
                <div className="dex">
                    <h5>DEX</h5>
                    <h3>{character.DEX}</h3>
                </div>
                <div className="con">
                    <h5>CON</h5>
                    <h3>{character.CON}</h3>
                </div>
                <div className="wis">
                    <h5>WIS</h5>
                    <h3>{character.WIS}</h3>
                </div>
                <div className="int">
                    <h5>INT</h5>
                    <h3>{character.INT}</h3>
                </div>
                <div className="cha">
                    <h5>CHA</h5>
                    <h3>{character.CHA}</h3>
                </div>
            </div>
        </div>
        <div className="characterInformation">
                <div className="user">
                    <h5>User</h5>
                    <h3>{character.user}</h3>
                </div>
            </div>
        <div className="buttons">
            <button onClick={() => dispatch(deleteCharacter(character._id))}>Delete</button>
            <button onClick={()=>{setCurrentId(character._id)}}>Edit</button>
            <button onClick={() => dispatch(calculateLevel(character._id))}>Set Level</button>
            <p>{moment(character.createdAt).fromNow()}</p>
        </div>
    </div>
    );
}

export default Character