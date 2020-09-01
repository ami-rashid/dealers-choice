const router = require("express").Router()
const { Pokemon } = require('../db/models/Pokemon')

//Base route is /api

router.get('/pokemon', async (req, res, next) => {
    const pokemon = await Pokemon.findAll();
    res.json(pokemon);
})

router.get('/pokemon/:id', async (req, res, next) => {
    const pokemon = await Pokemon.findByPk(req.params.id);
    res.json(pokemon);
})

module.exports = router
