const express = require('express');
const router = express.Router();
const db = require('../models/index');

//Import models
const funFactModel = require("../models/fun_fact");
const rankModel = require('../models/rank');
const profilePictureModel = require('../models/profile_picture');
const userModel = require('../models/user');
const levelModel = require('../models/level');
const bodySystemModel = require('../models/body_system');
const insigniaModel = require('../models/insignia');
const bodyPartModel = require('../models/body_part');
const levelXBodySystemModel = require('../models/level_x_body_system');
const userXInsigniaModel = require('../models/user_x_insignia');

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the api :)" });
  });

router.get('/funFact', async(req, res) => {
    try {
        const myModels = await funFactModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/rank', async(req, res) => {
    try {
        const myModels = await rankModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/level', async(req, res) => {
    try {
        const myModels = await levelModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/profile-picture', async(req, res) => {
    try {
        const myModels = await profilePictureModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/user', async(req, res) => {
    try {
        const myModels = await userModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/body-system', async(req, res) => {
    try {
        const myModels = await bodySystemModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/insignia', async(req, res) => {
    try {
        const myModels = await insigniaModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/body-part', async(req, res) => {
    try {
        const myModels = await bodyPartModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/level-body-system', async(req, res) => {
    try {
        const myModels = await levelXBodySystemModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/user-insignia', async(req, res) => {
    try {
        const myModels = await userXInsigniaModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;