/*
The purpouse of this file is tho create the necesary endpoints to
*/
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//Import models
const funFactModel = require("../models/fun_fact");
const userModel = require("../models/user");
const rankModel = require('../models/rank');
const levelModel = require('../models/level');
const bodySystemModel = require('../models/body_system');
const insigniaModel = require('../models/insignia');
const bodyPartModel = require('../models/body_part');

router.post('/funFact/create', async (req, res) => {
    const { funFact } = req.body;
    if (!funFact) {
        return jwt.sign({ fun_fact: funFact});
      }
    try{
        const newFunFact = await funFactModel.create({fun_fact: funFact});
        res.status(201).json(newFunFact);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/rank/create', async (req, res) => {
    const { rank } = req.body;
    if (!rank) {
        return res.status(400).json({ error: 'No rank has been provided' });
      }
    try{
        const newRank = await rankModel.create({rank: rank});
        res.status(201).json(newRank);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/level/create', async (req, res) => {
    const { difficulty, body_parts_count } = req.body;
    if (!difficulty || !body_parts_count) {
        return res.status(400).json({ error: 'No difficulty or count of body parts has been defined' });
      }
    try{
        const newLevel = await levelModel.create({
            difficulty: difficulty,
            body_parts_count: body_parts_count
        });
        res.status(201).json(newLevel);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/body-system/create', async (req, res) => {
    const { name, section_image, puzzle_image } = req.body;
    if (!name || !section_image || !puzzle_image) {
        return res.status(400).json({ error: 'Missing information of the body system' });
      }
    try{
        const newBodySystem = await bodySystemModel.create({
            name: name,
            section_image: section_image,
            puzzle_image: puzzle_image
        });
        res.status(201).json(newBodySystem);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/insignia/create', async (req, res) => {
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
        return res.status(400).json({ error: 'Missing information of the insignia' });
      }
    try{
        const newInsignia = await insigniaModel.create({
            name: name,
            description: description,
            image: image
        });
        res.status(201).json(newInsignia);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/body-part/create', async (req, res) => {
    const { name, image, description } = req.body;
    if (!name || !image || !description) {
        return res.status(400).json({ error: 'Missing information of the body system' });
      }
    try{
        const newBodyPart = await bodyPartModel.create({
            name: name,
            image: image,
            description: description
        });
        res.status(201).json(newBodyPart);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

/*
router.get('/user/:id', async(req, res) => {
    try {
        const userId = await req.params.id;
        const user = await userModel.findByPk(userId);
        res.json(user);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/user/all', async (req, res) =>{
    const user = await userModel.findAll();
    res.status(200).json({ user: user });
});
*/
module.exports = router;