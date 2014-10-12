
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Browserify Demo' });
};

isValidEmail = require('./lib/isValidEmail')

exports.submitEmail = function(req, res) {
  var email = req.body.email;
  if (isValidEmail(email)) {
    res.send('Nice job!')
  } else {
    res.send('Your email fails. HIT THE BACK BUTTON')
  }
}