const       _ = require('../lib/functions');
const request = require('../request');

module.exports = (req, res) => {

    let { accessToken, lat, lng, distance, facebookpid, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !lat || !lng) {
        _.echoBadEnd(r, to, res, 'accessToken, lat, lng');
        return;
    }

    let uri = `https://api.instagram.com/v1/locations/search?access_token=${accessToken}`;
    uri += `&lat=${lat}&lng=${lng}`;

    if(distance)    uri += `&distance=${distance}`;
    if(facebookpid) uri += `&facebook_places_id=${facebookpid}`;

    return request(uri, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.stringify(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err || JSON.stringify(body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
};
