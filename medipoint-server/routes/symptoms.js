const express = require('express');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

const Symptoms = require('../models/symptom');

const symptomRouter = express.Router();

symptomRouter.use(express.json());

symptomRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Symptoms.find({})
            .then((symptoms) => {
                res.json(symptoms);
            },
                (err) => next(err))
            .catch((err) => next(err));

    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        for (var i = 0; i < req.body.length; i++) {
            Symptoms.create(req.body[i])
                .then((symptom) => {
                    console.log("Symptom Created : ", symptom);
                    //res.json(symptom);
                },
                    (err) => next(err))
                .catch((err) => next(err));
        }
        res.json(req.body);

    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Put on /symptoms not supported!");

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Symptoms.remove({})
            .then((resp) => {
                res.json(resp);
            },
                (err) => next(err))
            .catch((err) => next(err));

    });

symptomRouter.route('/:symptomId')
    // .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Symptoms.findById(req.params.symptomId)
            .then((symptom) => {
                res.json(symptom);
            },
                (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Post on /symptoms/:symptomId not suported");

    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Symptoms.findByIdAndUpdate(req.params.symptomId, { $set: req.body }, { new: true })
            .then((symptom) => {
                res.json(symptom);
            },
                (err) => next(err))
            .catch((err) => next(err));

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Symptoms.findByIdAndRemove(req.params.symptomId)
            .then((resp) => {
                res.json(resp);
            },
                (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = symptomRouter;