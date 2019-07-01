const express = require('express');
const multer = require('multer');
const PropertyController = require('../controllers/property.controller');
const propertyRouter = express.Router();
const porpertyPictureRouter = express.Router({mergeParams:true});
const porpertyTypes = express.Router({mergeParams:true});
const multerConfig = require('../helpers/multerConfig');
let upload = multer({ storage:multerConfig()});

const propertyController = new PropertyController(); 

porpertyPictureRouter.route('/').post(upload.single('imagen'),propertyController.postPicture);
porpertyPictureRouter.route('/:id').get(propertyController.getPicture);
porpertyTypes.route('/').get(propertyController.getPropertyTypes);

propertyRouter.use('/picture',porpertyPictureRouter);
propertyRouter.use('/type',porpertyTypes);

propertyRouter.route('/')
    .get(propertyController.getProperty)
    .post(propertyController.postProperty);

module.exports = propertyRouter;