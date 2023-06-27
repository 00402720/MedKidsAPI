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

//User api endpoints
router.get('/user', async(req, res) => {
    try {
        const myModels = await userModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/user/create', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please provide username, email, and password' });
      }
    try{
        const newUser = await userModel.create({
            username: username,
            email: email,
            password: password});
        res.status(201).json(newUser);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/points/:id', async(req, res) => {
    const userId = req.params.id;
    const {points} = req.body;

    try {
        const user = await userModel.findByPk(userId);
        if (!user) {
            return res.status(400).json({error : "User not found"});
        }
        user.points = user.points + points;
        await user.save();
        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
    }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/password/:id', async(req, res) => {
    const userId = req.params.id;
    const {password} = req.body;

    try {
        const user = await userModel.findByPk(userId);
        if (!user) {
            return res.status(400).json({error : "User not found"});
        }
        user.password = password;
        await user.save();
        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
        }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/pfp/:id', async(req, res) => {
    const userId = req.params.id;
    const {profilePicture} = req.body;

    try {
        const user = await userModel.findByPk(userId);
        if (!user) {
            return res.status(400).json({error : "User not found"});
        }
        user.profilePicture = profilePicture;
        await user.save();
        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
        }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/rank/:id', async(req, res) => {
    const userId = req.params.id;

    try {
        const user = await userModel.findByPk(userId);
        if (!user) {
            return res.status(400).json({error : "User not found"});
        }
        switch (true) {
            case user.points <= 50:
                user.rank_id = 1;
                break;

            case user.points <= 100:
                user.rank_id = 2;
                break;

            case user.points <= 150:
                user.rank_id = 3;
                break;
            default:
                user.rank_id = 1;
                break;
        }
        await user.save();
        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
        }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
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