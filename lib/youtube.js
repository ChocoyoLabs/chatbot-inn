var querystring = require('querystring');
var request = require('request');

var key = 'AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU';
var channelId = 'UCTlkurv4_APN_2yuydRofUA';
var baseUrl = 'https://www.googleapis.com/youtube/v3/search';
var queryString = {
  key: key,
  channelId: channelId,
  part: 'snippet,id',
  order: 'date',
  maxResults: 1,
};
var url = baseUrl + '?' + querystring.stringify(queryString);

exports.fetch = function (cb) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body).items[0];
      var video = {
        url: 'https://www.youtube.com/watch?v=' + json.id.videoId,
        title: json.snippet.title,
        thumbnails: json.snippet.high.url,
      };

      cb(video);
    }
  });
};
