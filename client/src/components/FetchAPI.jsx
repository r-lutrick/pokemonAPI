import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const FetchAPI = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=804")
            .then((res) => {
                // console.log(res)
                setPokemon(res.data.results)
            })
            .catch((error) => {
                console.log("error message:", error)
            })
    }, []);

    return (
        <div className='container w-25'>
            <h1>Pokémon</h1>
            <ul className='list-group'>
                {
                    pokemon.map((poke, i) => {
                        return (
                            <li className='list-group-item' key={i}>
                                <Link to={`/pokemon/${poke.name}`}>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}
