module.exports.callback = (req, res) => {
    let { clientId, clientSecret, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!clientId || !clientSecret) {
        _.echoBadEnd(r, res);
        return;
    }
};
