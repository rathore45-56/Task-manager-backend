const express=require('express');
const router= express.Router();
const { createtask, getTasks} = require("../controllers/taskControllers");
router.get('/',getTasks);
router.post('/',createtask);
module.exports=router;