const express = require('express');
const router = express.Router();
const {getAllTasks,createTask,getSingleTask,updateTask,deleteTask} = require('../controllers/tasks')

/**
 * GET all tasks
 */

 router.get('/', getAllTasks);

/**
 * create new task
 */
router.post('/api/v1/tasks', createTask);

/**
 * get single task!
 */
 router.get('/api/v1/tasks/:id', getSingleTask);

/**
 * update task
 */
 router.patch('/api/v1/tasks/:id', updateTask);

/**
 * delete task
 */
 router.delete('/api/v1/tasks/:id', deleteTask);

module.exports = router;