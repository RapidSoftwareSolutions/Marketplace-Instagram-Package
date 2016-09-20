const request = require('request');
 
 module.exports = function (uri, callback) {
 
    let response      = {};
        response.data = []; 
 
    (function doRequest(uri, callback) {
        request(uri, (err, res, body) => {
            if(err || res.statusCode !== 200) {
                callback(err, res, body);
                return;
            }
            
            let parsed = JSON.parse(body);
 
            for (var i = parsed.data.length - 1; i >= 0; i--) {
                response.data.push(parsed.data[i]);
            }
 
            if(parsed.pagination && parsed.pagination.next_url) 
                doRequest(parsed.pagination.next_url, callback);
            else 
                callback(null, res, response);
        });
    })(uri, callback);
 } 