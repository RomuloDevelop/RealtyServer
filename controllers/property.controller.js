const path = require('path');
const express = require('express');
const Property = require('../db/models').Property;
const Property_Types = require('../db/models').Property_Types;
class PropertyController {
    constructor(){}

    getPropertyTypes(req, res){
        Property_Types.findAll().then(types => {
            res.json(types);
            console.log("All properties:", JSON.stringify(types));
        })
        .catch(ex=>{
            console.log(ex);
            res.send(ex).status(500);
        });
    }

    getProperty(req,res){
        Property.findAll().then(properties => {
            res.json(properties);
            console.log("All properties:", JSON.stringify(properties));
        });
    }

    postProperty(req,res){
        console.log(req.body);
        Property.create(req.body).then(property => {
            res.json(property);
            console.log("The property:", JSON.stringify(property));
        });
    }
    
    postProperty(req,res){
        const id = req.params.id;
        Property.create(req.body).then(property => {
            res.json(property);
            console.log("The property:", JSON.stringify(property));
        });
    }

    getPicture(req,res){
        res.sendFile(path.join(__dirname, '..','uploads',req.query.name,req.params.id));
    }

    postPicture(req, res){
        if(req.file) {
            res.json({file:req.file, body:req.body});
        } else res.send('without file');
    }
}

module.exports = PropertyController;