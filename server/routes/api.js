const express = require('express');
const router = express.Router();

const query = require('./query');
router.get('/show/query/:value', query);

const all = require('./all');
router.get('/show/all', all);
router.get('/show/query', all)

router.get('*', function(req, res){
    res.status(200).json({"content":[]});
  });

module.exports = router;