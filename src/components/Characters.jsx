import React from 'react';
import PropTypes from 'prop-types';

export const Characters = ({ pokemons }) => {
    return (
        <div className="row">
            {pokemons.map((pokemon) => (
                <div key={pokemon.id} className="col mb-4 mt-2">
                    <div className='card' style={{ minWidth: "200px" }}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
                        <div className='card-body'>
                            <h5 className='card-title fs-3'>{pokemon.name}</h5>
                            <hr />
                            <p><strong>Número:</strong> #{pokemon.id}</p>
                            <p><strong>Tipos:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                            <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


Characters.propTypes = {
    pokemons: PropTypes.array
};
