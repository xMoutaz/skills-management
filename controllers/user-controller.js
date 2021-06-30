const express = require('express');
var router = express.Router();
const User = require('../models/user');
var faker = require("faker");

router.get('/:id' ,async(req, resp) => {
    const user = await User.findById(req.params.id);
    resp.status(200).send(user);
});

router.get('/' ,async(req, resp) => {
    var skill = (req.query.skills && req.query.skills!== 'All')? req.query.skills:{$exists:true};
    const users = await User.find({ skills: skill}).sort({updatedAt:-1});
    const returnedObj = users.map(user => {
        return {'name': user.name, 'id': user._id, 'skills': user.skills}
    })
    resp.status(200).send({'items':returnedObj});
});

router.post('/' ,async(req, resp) => {
    const newUser = new User({
        name: faker.name.findName(),
        skills: [],
        updatedAt: Date.now()
    });
    const savedNewUser = await newUser.save();
    resp.status(201).send('Users created');
});

router.put('/', async (req, res) => {
    const skill = req.body.skill;
    const _id = req.body.id;
    const manageSkill = await User.updateOne(
        { _id: _id },
        {
        $set: {
            skills: skill,
            updatedAt: Date.now()
        },
    });
    res.status(200).json(manageSkill);
});

router.delete('/' ,async(req, resp) => {
    const deletedUsers = await User.deleteMany();
    resp.send('Users deleted');
});

module.exports = router