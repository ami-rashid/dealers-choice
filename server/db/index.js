const { db, pokedex } = require('../db/db')
const { Pokemon } = require('./models/Pokemon')

async function seed() {
    try {
        await db.sync({force: true})
        console.log('                                               Dropped old data, now inserting new data.                                               ')
        const allPokemon = await pokedex();
        await Promise.all(allPokemon.map(pokemon => Pokemon.create({
            name: pokemon.name,
            description: (pokemon.description.flavor_text_entries[0].flavor_text).replace(/(\n|\f)/gm," "),
            type: pokemon.info.types.map(element => element.type.name),
            hp: pokemon.info.stats[0].base_stat,
            attack: pokemon.info.stats[1].base_stat,
            defense: pokemon.info.stats[2].base_stat,
            specialAttack: pokemon.info.stats[3].base_stat,
            specialDefense: pokemon.info.stats[4].base_stat,
            speed: pokemon.info.stats[5].base_stat,
            sprite: pokemon.info.sprites.other['official-artwork'].front_default
        })))

    } catch (err) {
        console.error('There was an unexpected error: ', err, err.stack)
    }
}

seed();