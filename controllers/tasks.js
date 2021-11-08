const getAllTasks = (req,res) => {
    res.send('all task')
}


const createTask = (req,res) => {
    res.send('create task')
}



const getSingleTask = (req,res) => {
    res.send('single task task')
}



const updateTask = (req,res) => {
    res.send('update one task')
}



const deleteTask = (req,res) => {
    res.send('delete one task')
}



module.exports = {
    getAllTasks,createTask,getSingleTask,updateTask,deleteTask
}