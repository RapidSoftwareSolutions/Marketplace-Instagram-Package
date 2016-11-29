const       _ = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {

    let { accessToken, userId, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !userId) {
        _.echoBadEnd(r, to, res, 'accessToken, userId');
        return;
    }

    let uri = `https://api.instagram.com/v1/users/${userId}/relationship?access_token=${accessToken}`;

    return request.post({url: uri, form: {action: 'follow', access_token: accessToken}}, (err, response, body) => {
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
