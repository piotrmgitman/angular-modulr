const _ = require('lodash');
const data = require('../data/results.json');

module.exports = (req, res) => {
  const value = req.params.value;
  const searchParams = { 'id': value, 'name': value };

  const content = _.filter(data.content, o => {
      return _.some(searchParams, (v, k) => {
        return _.includes(_.toUpper(o[k]), _.toUpper(v));
      });
    });

  res.status(200).json({ content });
};