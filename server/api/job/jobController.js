var Job = require('./jobModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
    Job.findById(id)
    .populate('company')
    exec()
    .then(function(job) {
        if(!job) {
            next(new Error('No job with that ID'));
        }else {
            req.job = job;
            next();
        }
    }, function(err) { 
        next(err);
    });
};

exports.get = function(req, res, next) {
    Job.find({})
    .populate('Jobs')
    .exec()
    .then(function(jobs){
        res.json(jobs);
    }, function(err){
        next(err);
    });
};

exports.getOne = function(req, res, next){
    var job = req.job;
    res.json(job);
};

exports.put = function(req, res, next){ 
    var job = req.job;

    var update = req.body;

    _.merge(job, update)

    job.save(function(err, saved) {
        if(err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};

exports.post = function(req, res, next) {
    var newjob = req.body;
    Job.create(newjob)
        .then(function(post) {
        res.json(job);
        }, function(err) {
            logger.error(err);
        });
};

exports.delete = function(req, res, next) {
    req.job.remove(function(err, removed){
        if(err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};