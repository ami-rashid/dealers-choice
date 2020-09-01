const Sequelize = require("sequelize")
const axios = require("axios")
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/pokedex');

const pokedex = async () => {
    const allPokemon = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=386')).data.results
    let pokeData = [];

    for (let i = 0; i < allPokemon.length; i++) {
        const pokeInfo = await getPokeData(allPokemon[i]);
        const pokeDes = await getDescription(pokeInfo);
        pokeData.push({
            name: allPokemon[i].name,
            description: pokeDes,
            info: pokeInfo
        })
    }
    return pokeData;
}

const getPokeData = async (element) => {
    return (await axios.get(`${element.url}`)).data
}

const getDescription = async (element) => {
    return (await axios.get(`${element.species.url}`)).data
}

module.exports = {
    db,
    pokedex
}
