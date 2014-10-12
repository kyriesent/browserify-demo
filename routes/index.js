
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Browserify Demo' });
};

exports.submitEmail = function(req, res) {
  console.log(req.body.email);
  var email = req.body.email;
  if (isValidEmail(email)) {
    res.send('Nice job!')
  } else {
    res.send('Your email fails. HIT THE BACK BUTTON')
  }
}