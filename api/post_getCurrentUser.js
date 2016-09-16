const request = require('request');

module.exports = (req, res) => {

    let { accessToken, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken) {
        _.echoBadEnd(r, to, res);
        return;
    }

    return request(`https://api.instagram.com/v1/users/self/?access_token=${accessToken}`, (err, response, body) => {
    	if(!err && response.statusCode == 200) {
    		r.contextWrites[to] = JSON.stringify(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
};
