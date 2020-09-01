const Sequelize = require("sequelize")
const { db } = require('../db')
const { STRING, INTEGER, ARRAY, TEXT } = Sequelize;

const Pokemon = db.define('pokemon', {
    name: STRING,
    description: STRING,
    type: ARRAY(TEXT),
    hp: INTEGER,
    attack: INTEGER,
    defense: INTEGER,
    specialAttack: INTEGER,
    specialDefense: INTEGER,
    speed: INTEGER,
    sprite: STRING
})

module.exports = { Pokemon }