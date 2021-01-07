const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
        let result = await db.TrainingTag.findAll();
        res.status(200).json({
            trainingtag:result
        });
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

router.post('/',async(req,res) => {
    try{
        let result = await db.TrainingTag.create({
         tagId: req.body.tagId,
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
        let result = await db.TrainingTag.destroy({
            where : {id : req.params.id}
        })
            res.status(500).json({
                message: "Deleted"
            })
    } catch(err) {
            res.status(404).json({
                message: err
            })
        }
})

module.exports = router;