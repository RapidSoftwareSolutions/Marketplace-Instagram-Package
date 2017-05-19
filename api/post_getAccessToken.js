const       _ = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {

    let { clientId, clientSecret, redirectUri, code, to="to"} = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!clientId || !clientSecret || !redirectUri || !code) {
        _.echoBadEnd(r, to, res, 'clientId, clientSecret, redirectUri, code');
        return;
    }

    let uri = `https://api.instagram.com/oauth/access_token`;

    return request.post({url: uri, form: {client_id: clientId, client_secret: clientSecret, redirect_uri:redirectUri, code:code, grant_type:'authorization_code'}}, (err, response, body) => {
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
