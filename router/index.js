const express = require('express');
const router = express.Router();

/* GET Start Page */
router.get('/', (req, res, next) => {
    res.render('index',{
        title:'Task Manager'
    })
});

/**
 * GET all tasks
 */

router.get('/api/v1/tasks', (req, res, next) => {
    res.send('route for all tasks')
});

/**
 * create new task
 */
router.post('/api/v1/tasks', (req, res, next) => {
    res.send('post route')
});

/**
 * get single task
 */
 router.get('/api/v1/tasks/:id', (req, res, next) => {
    
});

/**
 * update task
 */
 router.patch('/api/v1/tasks/:id', (req, res, next) => {
    
});

/**
 * delete task
 */
 router.delete('/api/v1/tasks/:id', (req, res, next) => {
    
});

module.exports = router;