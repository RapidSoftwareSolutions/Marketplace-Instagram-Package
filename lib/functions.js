module.exports.echoBadEnd = (r, to, res, req) => {
    r.contextWrites[to] = {
        text: 'Please, check and fill in required fields',
        fields: req.split(', ')
    };
    r.callback = 'error';

    res.status(200).send(r);
};