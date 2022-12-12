import React, { useState } from 'react';
import axios from 'axios';

const Axsios = () => {
    const [pokemons, setPokemons] = useState([]);
    const handleClick = (() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => setPokemons(response.data.results))
    })
    return (
        <div>
            <button onClick={() => handleClick()}>Fetch Pokemons</button>
            <div>
                <h1>List of Pokemons</h1>
                {pokemons.length > 0 ? pokemons.map((pok, id) => {
                    return (
                        <ul>
                            <li key={id}>
                                {pok.name};
                            </li>
                        </ul>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Axsios