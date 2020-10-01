const express = require('express');
const router = express.Router();


router.get('/',(req,res) =>{
    res.render('index.html', {tittle : 'Tableros'})
});

router.get('/contact',(req,res) =>{
    res.render('contact.html', {tittle : '¡Contactanos!'})
});

router.get('/aboutus',(req,res) =>{
    res.render('contact.html', {tittle : '¡Aprende acerca de lo que deberias!'})
});

module.exports = router;