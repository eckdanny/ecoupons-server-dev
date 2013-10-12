var express   = require('express');

//
// Config
//
var app = express();
app.configure(function () {

  // Environment
  app.set('port', process.env.PORT || 3000)

  // Middleware
  app.use(express.logger('dev'));   // 'default', 'short', 'tiny', 'dev'
  app.use(express.compress());
  app.use(express.bodyParser());
  app.use(express.cookieParser());

  // CORS Support
  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  // Provide a favicon resource
  app.use(express.favicon());

});

//
// Routes
//

// Unchecked example
app.get('/', function (req, res) {
  res.send({msg: 'Hello world!'});
});

// Routes below this block require valid appCode header
app.all('*', function (req, res, next) {
  if (req.get('appCode') !== '6sySN') {
    res.status(412);
    res.send({err: 'Invalid appCode header!'});
  }
  next();
});

// Query Offer Resource
app.get('/offer', function (req, res) {
  var uuid;
  if (!(uuid = req.cookies.uuid)) {
    // Guest
    if (req.query.cat) {
      res.send('non-targetted offers in categories: ' + req.query.cat);
    } else {
      res.send('non-targetted offers');
    }
  } else {
    // Registered User
    if (req.query.cat) {
      res.send('targetted offers for uuid: ' + uuid + ' in categories: ' + req.query.cat);
    } else {
      res.send('targetted offers for uuid: ' + uuid);
    }
  }
});

// Retrieve my offers
app.get('/user/:userId/offer', function (req, res) {
  // This is not available for guest clients (they track in cookies)
  res.send('returns an array of saved offers for ' + req.params.userId + '.');
});

//
// Start 'em up!
//
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
