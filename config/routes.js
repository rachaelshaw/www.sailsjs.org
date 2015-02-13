/**
 * sails.config.routes
 * @type {Object}
 */
var fs = require('fs');
var path = require('path');

module.exports.routes = {

  // Redirect 'beta.sailsjs.org' to 'sailsjs.org'
  '/*': function (req, res, next) {

    var file = path.resolve() + '/assets' + req.url;
    console.log(file);
    if (req.headers.accept.indexOf('html') > -1) {
        fs.exists(file, function(exists){
            if (!exists) {
                return res.redirect('/#!' + req.url);
            } else {
                return next();
            }
        });
    } else {
        return next();
    }

//    try {
//      // There doesn't seem to be a good way to preserve the URL fragment
//      // (e.g. #/foo/bar/baz) because it's not sent to the server.
//      if (req.subdomains[0] === 'beta') {
//        return res.redirect('http://sailsjs.org' + req.originalUrl);
//      }
//    }
//    catch(e) { }
//    next();
  },

  // Serve .jsmenu files with a "Content-Type: text/json" header
  'get /*.jsmenu': function (req, res, next) {
    res.type('json');
    next();
  },

  // Used to populate activity bar in UI
  'get /news': 'NewsController.find',

  // Recompile the docs
	'get /refresh': 'RefreshController.index'
};
