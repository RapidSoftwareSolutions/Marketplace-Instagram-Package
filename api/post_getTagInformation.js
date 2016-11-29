const       _ = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {

    let { accessToken, tagName, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !tagName) {
        _.echoBadEnd(r, to, res, 'accessToken, tagName');
        return;
    }

    return request(`https://api.instagram.com/v1/tags/${tagName}?access_token=${accessToken}`, (err, response, body) => {
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
