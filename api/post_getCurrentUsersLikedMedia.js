const request = require('request');

module.exports = (req, res) => {
    let { accessToken, userId="self", maxLikeId, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !userId) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let uri = `https://api.instagram.com/v1/users/${userId}/media/liked/?access_token=${accessToken}`;
    
    //if(maxLikeId) uri += `&max_like_id=${maxLikeId}`;

    return request(uri, (err, response, body) => {
        console.log(body);
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
