const request = require('request');

module.exports = (req, res) => {

    let { accessToken, count, query, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let uri = `https://api.instagram.com/v1/users/search?q=${query}&access_token=${accessToken}`;
    
    if(count) uri += `&count=${count}`;

    return request(uri, (err, response, body) => {
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
