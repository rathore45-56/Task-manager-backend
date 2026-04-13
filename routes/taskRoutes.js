const express=require('express');
const router= express.Router();
const { createtask, getTasks, deletedtask, updatedtask, markComplete} = require("../controllers/taskControllers");
router.get('/tasks',getTasks);
router.post('/tasks',createtask);
router.put('/tasks/:id',updatedtask);
router.delete('/tasks/:id',deletedtask);
router.patch('/tasks/:id/complete',markComplete)
module.exports=router;