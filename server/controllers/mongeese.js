const mongoose = require('mongoose');

require('../models/theMongoose');
const Animal = mongoose.model('Animal');

module.exports = {
    index: (req, res) => {
        Animal.find()
            .then(animals => res.render("index", { allAnimals: animals }))
            .catch(err => {
                console.log(err);
            })
    },
    new: (req, res) => {
        res.render('new');
    },
    add: (req,res) => {
        Animal.create(req.body)
            .then(animal => {
                console.log(animal);
                res.redirect('/');
            })
            .catch(err => {
                for (var key in err.errors) {
                    req.flash('create', err.errors[key].message);
                }
                res.redirect('/animals/new');
            })
    },
    show: (req,res) => {
        Animal.findOne({ _id: req.params.id })
            .then(animal => {
                console.log(animal);
                res.render('show', { animal: animal });
            })
            .catch(err => {
                console.log(err);
            })
    },
    editPage: (req,res) => {
        Animal.findOne({ _id: req.params.id })
            .then(animal => {
                console.log(animal);
                res.render('edit', { animal: animal });
            })
            .catch(err => {
                console.log(err);
            })
    },
    edit: (req,res) => {
        Animal.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
            .then(result => {
                console.log(result);
                res.redirect('/');
            })
            .catch(err => {
                for (var key in err.errors) {
                    req.flash('create', err.errors[key].message);
                }
                res.redirect(`/animal/edit/${req.params._id}`);
            });
    },
    destroy: (req, res) => {
        Animal.remove({ _id: req.params.id })
            .then(result => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
};