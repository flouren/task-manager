const getAllTasks = (req,res) => {
    res.send('all task')
}


const createTask = (req,res) => {
    res.json(req.body)
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