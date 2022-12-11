import React from 'react'
import { useState } from 'react'

const PokemonAPI = () => {
    const [pokemons, setPokemons] = useState([]);
    const handleClick = (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => response.json())
            // .then(data => setPokemons(data.results))
            .then(data => setPokemons(data.results))
    })
    console.log(pokemons)
    return (
        <div>
            <button onClick={() => handleClick()}>Fetch Pokemons</button>
            <div>
                <h1>List of Pokemons</h1>
                {pokemons ? pokemons.map((pok, id) => {
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

export default PokemonAPI