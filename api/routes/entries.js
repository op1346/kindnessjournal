'user strict'

const express = require('express');
const { mdoels } = require('./db');

const router = express.Router();
const { Entry } = models;

// Async Handler
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      return next(error)
    }
  }
}

module.exports = EntryRoute;