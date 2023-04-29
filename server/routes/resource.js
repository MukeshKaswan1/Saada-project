const express = require('express');

const router = express.Router();
const resource = require('../models/resource');

const isAuth = require('../middlewares/is-auth')

const classroomController = require('../controllers/resource');

router.post('/createResource', classroomController.createResource);
router.post('/getResources', isAuth, classroomController.getResources);
router.post('/getResource', classroomController.getResource);

router.get("/ByName", async (req, res) => {
    const keyword = req.query.name
        ? { "name": { $regex: req.query.name, $options: "i" } }
        : {};
    const users = await resource.find(keyword);
    res.send(users);
}); 

module.exports = router; 