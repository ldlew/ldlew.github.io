import React from 'react';
import { useSelector } from 'react-redux';
import Character from './Character/Character';

const LoadingScreen = () => {
    return (
        <div>Loading Screen</div>
    )
}

const Characters = ({setCurrentId}) => {
    const characters = useSelector((state) => state.characters);

    return (
        !characters.length ? <LoadingScreen/> : (
            <div className="grid">
                {characters.map((character) => (
                <div key={character._id}>
                    <Character character={character} setCurrentId={setCurrentId} />
                </div>
                ))}
            </div>
        )
    );
}

export default Characters