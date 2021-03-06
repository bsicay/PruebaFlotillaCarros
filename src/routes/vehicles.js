const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');


router.get('/add', isLoggedIn, (req, res) => {
    res.render('vehicles/add')
});

router.post('/add', isLoggedIn, async(req, res) => {
    //destructurando para obtener valores de input
    var {marca, modelo, anio, placas, estado} = req.body;
    //conversión de string a integer
    anio = Number(anio) 
    const newVehicle = {
        marca,
        modelo, 
        anio,
        placas,
        estado, 
        userID: req.user.id
    };
    await pool.query('INSERT INTO vehicles set ?', [newVehicle]);
    req.flash('success', 'Vehiculo guardado exitosamente');
    res.redirect('/vehicles')
});

//listando los vehiculos
router.get('/', isLoggedIn, async (req, res) => {
    const vehicles = await pool.query('SELECT * FROM vehicles WHERE userID = ?', [req.user.id]);
    res.render('vehicles/list', { vehicles });
});

//Eliminar el vehículo
router.get('/delete/:id', isLoggedIn,  async (req, res)=>{
    const { id } = req.params; 
    await pool.query('DELETE FROM vehicles WHERE id = ?', [id]);
    req.flash('success', 'Vehiculo eliminado exitosamente');
    res.redirect('/vehicles')
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const vehicles = await pool.query('SELECT * FROM vehicles WHERE id = ?', [id]);
    console.log(vehicles[0]);
    res.render('vehicles/edit', {vehicle: vehicles[0]});
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    var {marca, modelo, anio, placas, estado} = req.body;
    anio = Number(anio) 
    const newVehicle = {
        marca,
        modelo, 
        anio,
        placas,
        estado
    };
    await pool.query('UPDATE vehicles set ? WHERE id = ?', [newVehicle, id]);
    req.flash('success', 'Cambios guardados exitosamente');
    res.redirect('/vehicles');
});

module.exports = router;