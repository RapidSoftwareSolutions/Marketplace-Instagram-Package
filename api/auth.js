const _   = require('../lib/functions');
const api = require('instagram-node').instagram();

module.exports.auth = (req, res) => {
    let { clientId, clientSecret, to="to" } = req.query;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!clientId || !clientSecret) {
        _.echoBadEnd(r, to, res);
        return;
    }

    api.use({
      client_id:     clientId,
      client_secret: clientSecret
    });

    req.to = to;
    res.redirect(api.get_authorization_url(REDIRECT_URI, { scope: [
        'likes', 
        'public_content', 
        'basic', 
        'follower_list', 
        'comments',
        'relationships',
        'likes'
    ], state: 'a state' }));
}

module.exports.callback = (req, res) => {
    let r = {
        callback        : "",
        contextWrites   : {}
    };

    api.authorize_user(req.query.code, REDIRECT_URI, (err, result) => {
        if (err) {
            r.contextWrites['creditails'] = JSON.stringify(err);
            r.callback = 'error'; 
        } else {
            r.contextWrites['to'] = result.access_token;
            r.callback = 'success';
        }

        // redirect user to callback

        res.status(200).send(r);
    });
};