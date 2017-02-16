const router = require('express').Router();
const Award = require('../models/award');
const Actor = require('../models/actor');
const bodyParser = require('body-parser').json();
const ensureRole = require('../auth/ensure-role');

module.exports = router
    .post('/', ensureRole('admin'), bodyParser, (req, res, next) => {
        new Award(req.body).save()
            .then(award => res.send(award))
            .catch(next);
    })
    .get('/', (req, res, next) => {
        Award.find()
            .then(awards => res.send(awards))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Promise.all([
            Award.findById(id).lean(),
            Actor.find({ awards: id }).lean()
        ])
        .then(results => {
            const award = results[0];
            const actors = results[1];
            award.actors = actors;
            res.send(award);
        })
        .catch(next);
    });