const router = require('express').Router();
const Actor = require('../models/actor');
const bodyParser = require('body-parser').json();

module.exports = router
    .post('/', bodyParser, (req, res, next) => {
        new Actor(req.body).save()
            .then(actor => res.send(actor))
            .catch(next);
    })
    .get('/', (req, res, next) => {
        Actor.find()
            .then(actors => res.send(actors))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Actor.findById(req.params.id)
            .populate('awards')
            .lean()
            // TODO: check !actor and send 404
            .then(actor => res.send(actor))
            .catch(next);
    });