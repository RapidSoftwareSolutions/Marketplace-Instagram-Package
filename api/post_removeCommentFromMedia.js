const       _ = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {

    let { accessToken, mediaId, commentId, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !mediaId || !commentId) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let uri = `https://api.instagram.com/v1/media/${mediaId}/comments/${commentId}?access_token=${accessToken}`;

    return request.del(uri, (err, response, body) => {
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
