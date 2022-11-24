module.exports = (req, res, next) => { // next() sert à passer le relai au middleware suivant
    try {
        console.log('Je suis au bon endroit')
        next();
    } catch {
        res.status(501).json({message: 'Erreur au niveau du middleware : logger'})
    }
};