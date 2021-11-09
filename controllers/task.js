const Task = require('../models/Tasks')

const getAllTasks = (req,res) => {
    // Task.find()
    // then(e=>console.log(e))
    res.send('all task')
}


const createTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}



const getSingleTask = (req,res) => {
    res.json(req.params)
}



const updateTask = (req,res) => {
    res.json({
        'id':req.params,
        'message':'update one task'
    })
}



const deleteTask = (req,res) => {
    res.json({
        'message':`delete one task with id`,
        'id':req.params
    })
}



module.exports = {
    getAllTasks,createTask,getSingleTask,updateTask,deleteTask
}