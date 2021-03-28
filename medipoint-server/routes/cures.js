const express = require('express');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

const Cures = require('../models/cure');

const cureRouter = express.Router();

cureRouter.use(express.json());

cureRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Cures.find({}, { cure: 0 })
            .then((cures) => {
                res.json(cures);
            },
                (err) => next(err))
            .catch((err) => next(err));

    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        for (var i = 0; i < req.body.length; i++) {
            Cures.create(req.body[i])
                .then((cure) => {
                    console.log("Cure Created : ", cure);
                    //res.json(cure);
                },
                    (err) => next(err))
                .catch((err) => next(err));
        }
        res.json(req.body);

    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Put on /cures not supported!");

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Cures.remove({})
            .then((resp) => {
                res.json(resp);
            },
                (err) => next(err))
            .catch((err) => next(err));

    });

cureRouter.route('/:cureId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Cures.findById(req.params.cureId)
            .then((cure) => {
                res.json(cure);
            },
                (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Post on /cures/:cureId not suported");

    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Cures.findByIdAndUpdate(req.params.cureId, { $set: req.body }, { new: true })
            .then((cure) => {
                res.json(cure);
            },
                (err) => next(err))
            .catch((err) => next(err));

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Cures.findByIdAndRemove(req.params.cureId)
            .then((resp) => {
                res.json(resp);
            },
                (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = cureRouter;