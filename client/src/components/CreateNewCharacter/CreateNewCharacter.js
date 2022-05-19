import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../actions/characters';
import Form from '../Form/Form';

const CreateCharacter = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [currentId, dispatch]);
  
  return (
    <div>
        <h2>All</h2>
        <div>
            <div className="grid">
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
        </div>
    </div>
  );
};

export default CreateCharacter;