const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
    console.log("fetching");
    let result =  await db.Module.findAll();
        res.status(200).json({
            module:result
        });
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

//<===============Adding module =========>
router.post('/',async(req,res) => {
    try{
        let result = await db.Module.create({
        name: req.body.name,
        trainingId: req.body.trainingId
    })
        res.status(200).json({
            message:result
        });
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

router.delete('/:id', async(req,res) => {
    try{
        let result = await db.Module.destroy({
            where : {id : req.params.id}
        })
            res.status(202).json({
                message: "Deleted"
            })
    } catch(err) {
            res.status(404).json({
                message: err
            })
        }
})

module.exports = router;