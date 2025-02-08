import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css'; 

const App = () => {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterClick = (characterId) => {
        setSelectedCharacterId(characterId);
    };

    return (
        <div className="App">
            <h1>Marvel Characters</h1>
            <CharacterList onCharacterClick={handleCharacterClick} />
            <CharacterDetail characterId={selectedCharacterId} />
        </div>
    );
};

export default App;
