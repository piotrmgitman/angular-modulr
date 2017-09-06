const data = require('../data/results.json');

module.exports = (req, res) => {
    const content = data.content;

    res.status(200).json({ content });
};