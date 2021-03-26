const express = require('express');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

const Diseases = require('../models/disease');

const diseaseRouter = express.Router();

diseaseRouter.use(express.json());

diseaseRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Diseases.find({}, { info: 0 })
            .then((diseases) => {
                res.json(diseases);
            },
                (err) => next(err))
            .catch((err) => next(err));

    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        for (var i = 0; i < req.body.length; i++) {
            Diseases.create(req.body[i])
                .then((disease) => {
                    console.log("Disease Created : ", disease);
                    //res.json(disease);
                },
                    (err) => next(err))
                .catch((err) => next(err));
        }
        res.json(req.body);


    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Put on /diseases not supported!");

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Diseases.remove({})
            .then((resp) => {
                res.json(resp);
            },
                (err) => next(err))
            .catch((err) => next(err));

    });

diseaseRouter.route('/:diseaseId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Diseases.findById(req.params.diseaseId)
            .then((disease) => {
                res.json(disease);
            },
                (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Post on /diseases/:diseaseId not suported");

    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Diseases.findByIdAndUpdate(req.params.diseaseId, { $set: req.body }, { new: true })
            .then((disease) => {
                res.json(disease);
            },
                (err) => next(err))
            .catch((err) => next(err));

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Diseases.findByIdAndRemove(req.params.diseaseId)
            .then((resp) => {
                res.json(resp);
            },
                (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = diseaseRouter;