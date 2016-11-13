const       _ = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {

    let { accessToken, mediaId, text, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !mediaId || !text) {
        _.echoBadEnd(r, to, res, 'accessToken, mediaId, text');
        return;
    }

    let uri = `https://api.instagram.com/v1/media/${mediaId}/comments`;

    return request.post({url: uri, form: {text: text, access_token: accessToken}}, (err, response, body) => {
    	if(!err && response.statusCode == 200) {
    		r.contextWrites[to] = body;
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err || body;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
};
