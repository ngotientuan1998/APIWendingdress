const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const COMMON = require('./COMMIN');
const uri = COMMON.uri;

const jobModel = require('../model/modeJob');
