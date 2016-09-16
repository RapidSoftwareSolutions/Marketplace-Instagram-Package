module.exports.echoBadEnd = (r, to, res) => {
    r.contextWrites[to] = 'Error: Fill in required fields to use the Instagram API.';
    r.callback = 'error';

    res.status(200).send(r);
}