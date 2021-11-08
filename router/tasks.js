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
router.post('/', createTask);

/**
 * get single task!
 */
 router.get('/:id', getSingleTask);

/**
 * update task
 */
 router.patch('/:id', updateTask);

/**
 * delete task
 */
 router.delete('/:id', deleteTask);

module.exports = router;