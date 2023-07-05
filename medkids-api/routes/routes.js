const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

//Import models
const funFactModel = require("../models/fun_fact");
const rankModel = require('../models/rank');
const userModel = require('../models/user');
const levelModel = require('../models/level');
const bodySystemModel = require('../models/body_system');
const insigniaModel = require('../models/insignia');
const bodyPartModel = require('../models/body_part');
const levelXBodySystemModel = require('../models/level_x_body_system');
const userXInsigniaModel = require('../models/user_x_insignia');
const rankXUserModel = require('../models/rank_x_user');

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the MedKids API :)" });
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
router.get('/funFact/:id', async(req, res) => {
    try {
        const funFactId = req.params.id;
        const funFact = await funFactModel.findByPk(funFactId);
        if (!funFact) {
            res.status(400).json({ error: 'Fun Fact not found' });
        }
        res.json(funFact);
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
router.get('/rank/:id', async(req, res) => {
    try {
        const rank = await rankXUserModel.findByPk(req.params.id);
        if (!rank) {
            res.status(400).json({ error: 'Rank not found' });
        }
        res.json(rank);
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
router.get('/level/:id', async(req, res) => {
    try {
        const level = await levelModel.findByPk(req.params.id);
        if (!level) {
            res.status(400).json({ error: 'Fun Fact not found' });
        }
        res.json(level);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



//User api endpoints
<<<<<<< Updated upstream
router.get('/user', async(req, res) => {
    try {
        const myModels = await userModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
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
=======
>>>>>>> Stashed changes
router.post('/user/create', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please provide username, email, and password' });
      }
    try{
        const newUser = await userModel.create({
            username: username,
            email: email,
<<<<<<< Updated upstream
            password: password});
        res.status(201).json(newUser);
=======
            password: password,
            points: 0,
            profile_picture: 1});
        jwt.sign({user: newUser}, '12345', (err, token) => {
            res.json({token: token})
        });
>>>>>>> Stashed changes
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/points/:points', verifyKey, async(req, res) => {
    try {
        const authData = jwt.verify(req.token, '12345');
        const user = await userModel.findByPk(authData.user.id);
        if (!user) {
            res.status(401).json({ error: 'User not found' });
        }
        user.points += Number(req.params.points);
        await user.save();
        res.json({ message: "Points Updated" });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
    }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/password/:password', verifyKey, async(req, res) => {
    try {
        const authData = jwt.verify(req.token, '12345');
        const user = await userModel.findByPk(authData.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.password = req.params.password;
        await user.save();
        return res.status(201).json({message: 'Password updated successfully'});
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
        }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/user/update/pfp/:id', verifyKey, async(req, res) => {
    try {
<<<<<<< Updated upstream
        const user = await userModel.findByPk(userId);
        if (!user) {
            return res.status(400).json({error : "User not found"});
        }
        user.profilePicture = profilePicture;
        await user.save();
        return res.status(200).json({ message: 'User updated successfully', user });
=======
        const authData = jwt.verify(req.token, '12345');
        const user = await userModel.findByPk(authData.user.id);
        if(!user){
            return res.status(401).json({ error: 'User not found' });
        }
        user.profile_picture = req.params.id;
        await user.save();
        return res.json({message: "Profile picture updated" });
>>>>>>> Stashed changes
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
        }
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }
});
<<<<<<< Updated upstream
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
=======
router.put('/user/update/rank', verifyKey, async (req, res) => {
    try {
        const authData = jwt.verify(req.token, '12345');
        const user = await userModel.findByPk(authData.user.id);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.rank_id = calculateRank(user.points);
        await user.save();
        return res.status(201).json({ message: 'Rank updated' });

    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ error: 'Invalid token' });
        } else if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((err) => err.message);
            return res.status(400).json({ error: validationErrors });
        }

        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/user', verifyKey, async(req, res) => {
    try {
        jwt.verify(req.token, '12345', (error, authData) => {
            if (error) {
                res.status(403);
            }
            else{
                res.json({message: "Login successful", authData: authData});
            }
        });
>>>>>>> Stashed changes
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
router.get('/body-system/:id', async(req, res) => {
    try {
        const bodySystem = await bodySystemModel.findByPk(req.params.id);
        if (!bodySystem){
            res.status(400).json({ error: 'Body system not found' });
        }
        res.json(bodySystem);
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
router.get('/insignia/:id', async(req, res) => {
    try {
        const insignia = await insigniaModel.findByPk(req.params.id);
        if (!insignia) {
            res.status(400).json({error: 'Insignia not found'});
        }
        res.json(insignia);
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
router.get('/body-part/:id', async(req, res) => {
    try {
        const bodyPart = await bodyPartModel.findByPk(req.params.id);
        if (!bodyPart) {
            res.status(400).json({error: 'Body part not found'});
        }
        res.json(bodyPart);
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

router.get('/rank-user', async(req, res) => {
    try {
        const myModels = await rankXUserModel.findAll();
        res.json(myModels);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

function verifyKey(req, res, next) {
    const bearerToken = req.headers['authorization'];
    if (bearerToken !== undefined) {
        const bearerTokenSecret = bearerToken.split(" ")[1];
        req.token = bearerTokenSecret;
        next();
    }
    res.status(403);
}

function calculateRank(points) {
    let rank_id;
    switch (true) {
        case points <= 50:
            rank_id = 1;
            break;

        case points <= 100:
            rank_id = 2;
            break;

        case points <= 150:
            rank_id = 3;
            break;

        default:
            rank_id = 1;
            break;
    }
    return rank_id;
}








module.exports = router;