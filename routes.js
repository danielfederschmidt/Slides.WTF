var slideshare = require('./modules/slideshare');
var winston = require("winston");

module.exports = function(app) {
  app.get('/v1/slides', function(req, res) {
    tag = req.query.tag;

    winston.info("Received request for slides with topic: " + tag);

    slideshare.fetchRandomSlideshareLink(tag, function(err, link){
      if(err != null){
        slideshare.fetchRandomSlideshareLink("", function(err, link){
          res.json(link);
          return;
        });
      } else {
        res.json(link);
        return;
      }
    });

  });

};
