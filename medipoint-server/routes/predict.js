const express = require('express');
const authenticate = require('../authenticate');
const cors = require('./cors');
const ps = require('python-shell');

const predictRouter = express.Router();

predictRouter.use(express.json());

predictRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .all(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();

    })
    .get(authenticate.verifyUser, (req, res, next) => {


        let options = {
            //   mode: 'text',
            //   pythonPath: 'path/to/python',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: '../MediPredict/',
            args: req.body.symptoms
        };

        ps.PythonShell.run('main.py', options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            var result = results.slice(-1).pop();
            res.setHeader('Content-Type', 'plain/text');
            res.end(result);
        });


    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Post on /predict not supported!");
    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Put on /predict not supported!");

    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end("Delete on /predict not supported!");
    });

module.exports = predictRouter;
