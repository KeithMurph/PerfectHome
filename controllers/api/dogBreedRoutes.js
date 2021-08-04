const express = require('express');
const router = express.Router();
const db = require('../../models');
const myHeader = new Headers({
    "x-api-key":"process.env.DOG_API_KEY"
})

