const express = require('express');
const router = express.Router();

/* GET Start Page */
router.get('/', (req, res, next) => {
    res.render('index',{
        title:'Task Manager'
    })
});



module.exports = router;