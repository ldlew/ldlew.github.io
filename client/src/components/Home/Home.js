import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCharacters } from '../../actions/characters';
import Characters from '../Characters/Characters';
import Form from '../Form/Form';

import './styles.css';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [currentId, dispatch]);
  
  return (
    <div>
    <h2>View All Characters</h2>
      <div className="cardWrap">
          <div>
              <div className="grid">
                  <Characters setCurrentId={setCurrentId}></Characters>
              </div>
              <div className="grid">
                  {currentId ? <Form currentId={currentId} setCurrentId={setCurrentId}/> : null}
              </div>
          </div>
      </div>
    </div>
  );
};

export default Home;