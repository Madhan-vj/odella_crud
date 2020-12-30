const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    console.log("fetching");
    await db.Training.findAll().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(404).json({
            message : err
        })
    })
})

router.post('/',async(req,res) => {
    console.log('posting ');
    await db.Training.create({
        name: req.body.name,
        moduleId: req.body.moduleId,
        categoryId: req.body.categoryId
    }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(404).json({
            message : err
        })
    })
})

router.delete('/:id', async(req,res) => {
    console.log('deleting');
    await db.Training.destroy({
        where : {id : req.params.id}
    }).then(result => {
        res.status(500).json({
            message: "Deleted"
        }).catch(err => {
            res.status(404).json({
                message: err
            })
        })
    })
})

module.exports = router;