const express = require('express');
const router = express.Router();
const db = require('../models');
// const training = require('../models/training');

router.get('/', async (req,res) => {
    
    try{
        let trainings = await db.Training.findAll({
            include: [{
                model: db.Location,
                as:'Location',
            }]
        });
        res.status(200).json({
            trainings
        })

    } catch(err) {
        console.log(err)
            res.status(404).json({
                message : err
            })
    }
})

router.post('/',async(req,res) => {
    try{
        let result = await db.Training.create({
        name: req.body.name,
        reference:req.body.reference,
        moduleId: req.body.moduleId,
        categoryId: req.body.categoryId,
        customization: req.body.customization,
        supportingDocumentUrl: req.body.supportingDocumentUrl,
        supportingDocumentName: req.body.supportingDocumentName,
        trainingDescription: req.body.trainingDescription,
        trainingPrice: req.body.trainingPrice,
        trainingTax: req.body.trainingTax,
        trainingOffer: req.body.trainingOffer,
        trainingDiscount: req.body.trainingDiscount,
        MTP: req.body.MTP,
        LocationDetails: req.body.LocationDetails,
        tagDetails: req.body.tagDetails
    })
        res.status(200).json({
            message:result
        });
   
    } catch(err) {
        console.log(err);
        res.status(404).json({
            message : err
        })
    }
})

router.delete('/:id', async(req,res) => {
    try{
        let result = await db.Training.destroy({
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