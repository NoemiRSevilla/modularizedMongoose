const theAnimals = require('../controllers/mongeese');
// create an object to that contains methods for mongoose to interface with MongoDB

module.exports = (app) => {

    app.get('/', (req, res) => theAnimals.index(req, res));

    app.post('/animals', (req, res) => theAnimals.add(req, res));

    app.get('/animals/new', (req, res) => theAnimals.new(req, res));

    app.get('/animals/:id', (req, res) => theAnimals.show(req, res));

    app.get('/animals/edit/:id', (req, res) => theAnimals.editPage(req, res));

    app.post('/animals/:id', (req, res) => theAnimals.edit(req, res));

    app.get('/animals/destroy/:id', (req, res) => theAnimals.destroy(req, res));
}
