import React, { useState } from 'react'


export const FetchAPI = () => {
    const [pokemon, setPokemon] = useState([])

    const handleFetch = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=804")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setPokemon(res.results)
                console.log(pokemon)
            }
            )
            .catch((error) =>
                console.log("error message:", error)
            )
    }

    return (
        <div className='container w-25'>
            <h1>Fetch API</h1>
            <button className='btn btn-dark my-3' onClick={handleFetch}>Click Me</button>
            <ul className='list-group'>
                {
                    pokemon.map((poke, i) => {
                        return (
                            <li className='list-group-item' key={i}>{poke.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
