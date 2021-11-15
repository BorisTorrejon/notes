const express = require('express');
const router  = express.Router();

router.get('/users/signin',(req,res)=>{
    res.send('Ingresando APP');
});

router.get('/users/signup',(req,res)=>{
    res.send('Fomulario de autenticacion');
});
module.exports = router;