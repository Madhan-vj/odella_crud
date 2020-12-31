const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
    console.log("fetching");
    await db.Module.findAll().then(users => {
        res.status(200).json({
            module:users
        });
    })
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

//<===============Adding module =========>
router.post('/',async(req,res) => {
    try{
    await db.Module.create({
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
        await db.Module.destroy({
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