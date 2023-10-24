import React, { useEffect, useState } from 'react';
import { Characters } from './Characters';
import { Buscador } from './Buscador';

export const MiApi = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 18;

    useEffect(() => {
        if (searchTerm === '') {
            fetchPokemons();
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
                .then(res => res.json())
                .then(data => {
                    setPokemons([data]);
                })
                .catch(error => {
                    console.error("No se encontró el Pokémon:", error);
                    setPokemons([]);
                });
        }
    }, [searchTerm, currentPage]);

    const fetchPokemons = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
            const data = await res.json();
            const promises = data.results.map(pokemon => {
                return fetch(pokemon.url).then(res => res.json());
            });
            Promise.all(promises).then(results => setPokemons(results));
            setTotalPages(Math.ceil(data.count / itemsPerPage));
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    };

    return (
        <>
            <Buscador onSearch={setSearchTerm} />
            <div className="container-fluid p-5">
                <Characters pokemons={pokemons} />
            </div>
            {searchTerm === '' && (
                <div className="d-flex justify-content-center mt-3 p-2 border rounded">
                    <div className="d-flex flex-wrap justify-content-center">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`btn ${currentPage === index + 1 ? 'btn-dark' : 'btn-light'}`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
