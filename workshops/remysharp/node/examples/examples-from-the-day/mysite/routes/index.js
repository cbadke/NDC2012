/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.character = function (req, res) {
  res.render('character', { name: 'Peter Griffin' });
};
