const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try{
        let result = await db.Trainer.findAll(); 
        res.status(200).json({
            trainer:result
        });
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

//<========== Adding trainer =========>
router.post('/',async(req,res) => {
    try{
   let result=await db.Trainer.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
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
        let result=await db.Trainer.destroy({
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