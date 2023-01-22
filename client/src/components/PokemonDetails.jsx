import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
    const { pokemon } = useParams()
    const [pokeData, setPokeData] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((res) => {
                console.log(res.data)
                setPokeData([res.data])
            })
            .catch((err) => {
                console.log('error was:', err)
            })
    }, [])

    return (
        pokeData.map((poke, i) => {
            return (
                <div key={i}>
                    <h1>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h1>
                    <img src={poke.sprites.other['official-artwork'].front_default} alt="" />
                </div>
            )
        })
    );
}

