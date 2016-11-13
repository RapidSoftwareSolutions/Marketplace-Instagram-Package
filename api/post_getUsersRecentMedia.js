const       _ = require('../lib/functions');
const request = require('../request');

module.exports = (req, res) => {

    let { accessToken, userId="self", count, maxId, minId, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !userId) {
        _.echoBadEnd(r, to, res, 'accessToken, userId');
        return;
    }

    let uri = `https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${accessToken}`;
    
    if(count) uri += `&count=${count}`;
    if(maxId) uri += `&max_id=${maxId}`;
    if(minId) uri += `&min_id=${minId}`;

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
