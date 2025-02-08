import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onCharacterClick }) => {
    const [characters, setCharacters] = useState([]);
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    const HASH = 'YOUR_HASH';

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
                );
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="character-list">
            {characters.map((character) => (
                <div key={character.id} onClick={() => onCharacterClick(character.id)}>
                    <h3>{character.name}</h3>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
