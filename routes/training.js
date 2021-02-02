const express = require('express');
const router = express.Router();
const db = require('../models');
// const location = require('../models/location');

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
        let find = await db.Location.findAll();
        let check = false;
        var i;
        for( i= 0; i < req.body.location.length; i++){
        find.forEach(item => {
            if (item.name == req.body.location[i].name){
                check = true;
            }
        })
    }
    console.log(check,"check");
    console.log(req.body.location.length,"length");
        if(check){
            console.log("Location already in db");
            res.status(404).json({
                message:"Location already in db"
            })
        }
        else{
        let result = await db.Training.create({
        name: req.body.training.name,
        reference:req.body.training.reference,
        moduleId: req.body.training.moduleId,
        categoryId: req.body.training.categoryId,
        customization: req.body.training.customization,
        supportingDocumentUrl: req.body.training.supportingDocumentUrl,
        supportingDocumentName: req.body.training.supportingDocumentName,
        trainingDescription: req.body.training.trainingDescription,
        trainingPrice: req.body.training.trainingPrice,
        trainingTax: req.body.training.trainingTax,
        trainingOffer: req.body.training.trainingOffer,
        trainingDiscount: req.body.training.trainingDiscount,
        MTP: req.body.training.MTP,
    }).then((result) => {
        console.log(result.id,"<=========>");
        req.body.location.trainingId = result.id;
             req.body.location.forEach(async(item) => {
        let locationResult = await db.Location.create({
            name: item.name,
            trainerId: item.trainerId,
            trainingId: req.body.location.trainingId,
            startDateAndTime: item.startDateAndTime,
            EndDateAndTime: item.EndDateAndTime,
            orderId: item.orderId
          })
         }).then(async(res) => {
            let search = await db.Tag.findAll();
            var valid = 0;
            search.forEach(element => {
                if(element.name == req.body.tag.name)
                {
                    valid = element.id;
                }
            });
            console.log(valid,"valid");
            if(valid){
                let trainingTagData = await db.TrainingTag.create({
                    tagId : valid,
                    trainingId : res.trainingId
                })
            }else{
                let tagdata = await db.Tag.create({
                    name: req.body.tag.name
                })
                let trainingTagData = await db.TrainingTag.create({
                    tagId : tagdata.id,
                    trainingId : res.trainingId
                })
            }
        })
    })
        res.status(200).json({
            message:"Training created"
        });
    }
    } catch(err) {
        console.log(err);
        res.status(404).json({
            message : err
        })
    }
})

router.delete('/:id', async(req,res) => {
    try{
        console.log(req.params,"check");
        let result = await db.Training.destroy({
            where : {id : req.params.id}
        })
            res.status(202).json({
                message: "Deleted"
            })
    } catch(err) {
            console.log(err);
            res.status(404).json({
                message: err
            })
        }
})

module.exports = router;