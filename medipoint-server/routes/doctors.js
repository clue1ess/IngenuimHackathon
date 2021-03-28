const express = require('express');
const authenticate = require('../authenticate');
const cors = require('./cors');
const mongoose = require('mongoose');

const Users = require('../models/user');

const doctorRouter = express.Router();

doctorRouter.use(express.json());

doctorRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {
        Users.find({ doctor: true })
            .populate("userid")
            .then((doctors) => {
                res.json(doctors);
            },
                (err) => next(err))
            .catch((err) => next(err));


    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Post on /doctors not supported!");
    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Put on /doctors not supported!");

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Delete on /doctors not supported!");
    });

module.exports = doctorRouter;
