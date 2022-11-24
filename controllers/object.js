const Object = require('../models/object');

exports.getObjectList = (req, res, next) => {
    console.log('Méthode getObjectList');

    Object.find()
        .then((list) => res.status(200).json(list))
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: 'NOT FOUND'});
        })
}

exports.getObject = (req, res, next) => {
    console.log('Méthode getObject', req.params);
    Object.findById(req.params.id)
            .then((obj) => res.status(200).json(obj))
            .catch((err) => {
                console.log(err);
                res.status(404).json({message: 'NOT FOUND'});
            })
}

exports.createObject = (req, res, next) => {
    console.log('Méthode createObject', req.body);

    let obj = new Object({
        name: req.body.name,
        weight: req.body.weight,
        url: req.body.url,
        creationDate: new Date(),
        modificationDate: new Date(),
        active: true
    })

    obj.save().then((saved) => res.status(200).json(saved)).catch(() => res.status(500).json({message: 'API REST ERROR: Pb avec la creation'}))
}

exports.updateObject = (req, res, next) => {
    console.log('Méthode updateObject ' + req.params.id, req.body);

    Object.findById(req.params.id)
        .then((obj) => {
            req.body.modificationDate = new Date();
            Object.updateOne({ _id: obj.id}, req.body)
                .then((result) => res.status(200).json(result))
                .catch((err) => res.status(500).json({message: 'CANNOT UPDATE', error: err}))
        })
        .catch(() => res.status(404).json({message: 'NOT FOUND'}))
}

exports.deleteObject = (req, res, next) => {
    console.log('Méthode deleteObject ', req.params.id);

    Object.findByIdAndDelete(req.params.id)
        .then((result) => {
         if (result) {
            res.status(200).json(result)
         } else {
            res.status(500).json({message: 'ALREADY DELETED'})
         }
        })
        .catch((err) => {
            res.status(400).json({message: 'NOT FOUND', error: err})
        })
}
