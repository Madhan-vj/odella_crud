const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
    console.log("fetching");
    await db.Tag.findAll().then(users => {
        res.status(200).json({
            tags:users
        });
    })
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

//<===============Adding Tags =========>
router.post('/',async(req,res) => {
    try{
    await db.Tag.create({
        name: req.body.name
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
        await db.Tag.destroy({
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