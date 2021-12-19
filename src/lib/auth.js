module.exports = {

    //verificamos que exista una sesion para mostrar ventanas
    isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/signin');
    },


    //evitar que el usuario ingrese a vistas cuando ya inicio sesion
    isNotLoggedIn(req, res, next) {
        if(!req.isAuthenticated()){
            return next();
        }
        return res.redirect('/profile')

    }
};