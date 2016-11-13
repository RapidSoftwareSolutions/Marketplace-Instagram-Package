const       _ = require('../lib/functions');
const request = require('../request');

module.exports = (req, res) => {

    let { accessToken, query, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !query) {
        _.echoBadEnd(r, to, res, 'accessToken, query');
        return;
    }

    return request(`https://api.instagram.com/v1/tags/search?q=${query}&access_token=${accessToken}`, (err, response, body) => {
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
