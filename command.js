var youtube = require('./lib/youtube');
var i18n = require('./i18n');

exports.latest = function (device, match, callback) {

  youtube.fetch(function (video) {
    callback([
      {
        text: i18n.text,
      },
      {
        text: '',
      },
      {
        text: video.title,
      },
      {
        video: {
          url: video.url,
          thumbnails: video.thumbnails,
        },
      },
    ]);
  });
};
