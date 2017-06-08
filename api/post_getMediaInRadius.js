const       _ = require('../lib/functions');
const request = require('../request');

module.exports = (req, res) => {

    let { accessToken, distance, lat, lng, coordinate, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken) {
        console.log('here');
        _.echoBadEnd(r, to, res, 'accessToken, lng, lat');
        return;
    }
    if (typeof coordinate !== 'undefined'){
     coordinate = coordinate.replace(/\s/g,'')
     coord = coordinate.split(",");
     lat = coord[0];
     lng = coord[1];
   }

    let uri = `https://api.instagram.com/v1/media/search?lat=${lat}&lng=${lng}&distance=${distance || 1000}&access_token=${accessToken}`;

    return request(uri, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = body;
            r.callback = 'success';
        } else {
            console.log(err, body)
            r.contextWrites[to] = err || body;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
};
