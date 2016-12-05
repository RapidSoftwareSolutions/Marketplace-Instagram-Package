module.exports.echoBadEnd = (r, to, res, req) => {
    r.contextWrites[to] = {
    	status_code: "REQUIRED_FIELDS",
        status_msg: 'Please, check and fill in required fields',
        fields: req.split(', ')
    };
    r.callback = 'error';

    res.status(200).send(r);
};