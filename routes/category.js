const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req,res) => {
    try { 
        let result = await db.Category.findAll();
        res.status(200).json({
            category: result
        });
} catch(err) {
        console.log(err)
        res.status(404).json({
            message : err
        })
    }
})
//<===========  To get all categories by module id =========>
router.get('/:id', async (req,res) => {
    try {
        let result = await db.Category.findAll({
         where: { moduleId: req.params.id } 
    })
        res.status(200).json({
            modules: result
        });
} catch(err) {
        res.status(404).json({
            message : err
        })
    }
})

//<===============Adding category =========>
router.post('/',async(req,res) => {
   try {
    let result = await db.Category.create({
        name: req.body.name,
        moduleId: req.body.moduleId
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
        let result = await db.Category.destroy({
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