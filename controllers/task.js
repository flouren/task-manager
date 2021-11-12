const Task = require('../models/Tasks')
const asyncWrapper = require('../middleware/async')




const getAllTasks = asyncWrapper(async (req,res) => {
    
    
        const tasks = await Task.find()
        // res.status(200).json({tasks})  
        // res.status(200).json({tasks,amount:tasks.length})  
        res.status(200).json({success:true,data:{tasks,amount:tasks.length}})  


    
        
})


const createTask = async (req,res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})  
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}



const getSingleTask = async (req,res) => {

    try {
        const {id:taskID} = req.params 
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    
}



const updateTask = async (req,res) => {
    
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,
            {
                new:true,
                runValidators:true
            })

        // res.status(200).json({id:taskID,data:req.body})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}



const deleteTask = async (req,res) => {

    try {
        const {id:taskID} = req.params 
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}



module.exports = {
    getAllTasks,createTask,getSingleTask,updateTask,deleteTask
}