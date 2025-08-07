/* GET homepage */
const index = (req, res) => {
  res.render('index', { title: 'bootstamp' });
};

module.exports = {
  index
};
