const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
    await db.Training.findAll().then(users => {
        res.status(200).json({
            training:users
        });
    })
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

router.post('/',async(req,res) => {
    try{
    await db.Training.create({
        name: req.body.name,
        trainingId: req.body.trainingId
    }).then(result => {
        res.status(200).json({
            message:result
        });
    })
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

router.delete('/:id', async(req,res) => {
    try{
        await db.Training.destroy({
            where : {id : req.params.id}
        }).then(result => {
            res.status(500).json({
                message: "Deleted"
            })
        })
    } catch(err) {
            res.status(404).json({
                message: err
            })
        }
})

module.exports = router;