import React from 'react';

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <a href={`#${pokemon.name}`}>
                <img src={`${pokemon.sprite}`}/>
            </a>
        </div>
    )
}

export default Pokemon;