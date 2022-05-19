import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createCharacter, updateCharacter } from '../../actions/characters';
import './Form.css'

const Form = ({ currentId, setCurrentId }) => {
    const [characterData, setCharacterData] = useState({
        characterName: '', user: '', group: '', type: '', postCount: '', level: '', selectedFile: ''
    })

    const character = useSelector((state) => (currentId ? state.characters.find((characterName) => characterName._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (character) setCharacterData(character);
    }, [character]);
    
    // Clear form on submit
    const clear = () => {
        setCurrentId(0);
        setCharacterData({ characterName: '', user: '', group: '', type: '', postCount: '', level: '', selectedFile: '' });
    };

    // Redux call
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createCharacter(characterData));
          clear();
        }else {
            dispatch(updateCharacter(currentId, characterData));
            clear();
        }
    };

    return (
    <div className="cardWrap">
        <form onSubmit={handleSubmit}>
            <h2>{currentId ? 'Editing' : 'Create'} a Character</h2>

            <div className='wrap'>
                <h6>User</h6>
                <input name="user" value={characterData.user} onChange={(e) => setCharacterData({ ... characterData, user: e.target.value })} required={true}></input>
                <h6>Character name</h6>
                <input name="characterName" value={characterData.characterName} onChange={(e) => setCharacterData({ ... characterData, characterName: e.target.value })} required={true}></input>
            </div>

            <div className='wrap'>
                <h6>Group</h6>
                <input name="group" value={characterData.group} onChange={(e) => setCharacterData({ ... characterData, group: e.target.value })} required={true}></input>
                <h6>Class</h6>
                <input name="class" value={characterData.type} onChange={(e) => setCharacterData({ ... characterData, type: e.target.value })} required={true}></input>
                <h6>Post count</h6>
                <input name="postCount" value={characterData.postCount} onChange={(e) => setCharacterData({ ... characterData, postCount: e.target.value })} required={true}></input>
            </div>
            
            <div className='wrap'>
                <div className="slidecontainer">
                    <h6>Strength</h6>
                    {characterData.STR || 0}
                    <input type="range" default="0" min="-5" max="5" value={characterData.STR || ''} onChange={(e) => setCharacterData({ ... characterData, STR: e.target.value })}></input>
                </div>
                <div className="slidecontainer">
                    <h6>Dexterity</h6>
                    {characterData.DEX || 0}
                    <input type="range" default="0" min="-5" max="5" value={characterData.DEX || ''} onChange={(e) => setCharacterData({ ... characterData, DEX: e.target.value })}></input>
                </div>
                <div className="slidecontainer">
                    <h6>Constitution</h6>
                    {characterData.CON || 0}
                    <input type="range" default="0" min="-5" max="5" value={characterData.CON || ''} onChange={(e) => setCharacterData({ ... characterData, CON: e.target.value })}></input>
                </div>
                <div className="slidecontainer">
                    <h6>Wisdom</h6>
                    {characterData.WIS || 0}
                    <input type="range" default="0" min="-5" max="5" value={characterData.WIS || ''} onChange={(e) => setCharacterData({ ... characterData, WIS: e.target.value })}></input>
                </div>
                <div className="slidecontainer">
                    <h6>Intelligence</h6>
                    {characterData.INT || 0}
                    <input type="range" default="0" min="-5" max="5" value={characterData.INT || ''} onChange={(e) => setCharacterData({ ... characterData, INT: e.target.value })}></input>
                </div>
                <div className="slidecontainer">
                    <h6>Charisma</h6>
                    {characterData.CHA || 0}
                    <input type="range" required default="0" min="-5" max="5" value={characterData.CHA || ''} onChange={(e) => setCharacterData({ ... characterData, CHA: e.target.value })}></input>
                </div>
            </div>
                
            <div className="fileInput">
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setCharacterData({ ...characterData, selectedFile: base64 })}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

export default Form