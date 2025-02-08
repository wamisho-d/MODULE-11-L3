import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({characterId}) => {
    const [character, setCharacter] = useState(null);
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    const HASH = 'YOUR_HASH';

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            if (!characterId) return;

            try {
                const response = await axios.get(
                    `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
                );
                setCharacter(response.data.data.results[0]);
            } catch (error) {
                console.error("Error fetching character details:", error);
            }
        };

        fetchCharacterDetail();
    }, [characterId]);

    if (!character) return <div>Select a character to see the details</div>;

    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map((comic) => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
