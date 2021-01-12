const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
    console.log("fetching");
    let result = await db.Location.findAll();
        res.status(200).json({
            location:result
        });
} catch(err) {
    console.log(err);
        res.status(404).json({
            message : err
        })
    }
})

router.get('/:id',async(req,res) => {
    try{
        console.log('fetch by id');
        let result = await db.Location.findAll({
            where : {trainingId : req.params.id}
        })
        res.status(200).json({
            location:result
        });
    }catch(err) {
        console.log(err);
            res.status(404).json({
                message : err
            })
        }
})
//<=========== Adding location =========>
router.post('/',async(req,res) => {
    try{
        let result = await db.Location.create({
        name: req.body.name,
        trainerId: req.body.trainerId,
        trainingId: req.body.trainingId,
        startDateAndTime: req.body.startDateAndTime,
        EndDateAndTime: req.body.EndDateAndTime,
        orderId: req.body.orderId
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
    try {
        let result = await db.Location.destroy({
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