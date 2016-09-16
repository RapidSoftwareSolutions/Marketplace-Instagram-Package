module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Instagram',
        "tagline": "Instagram Package",
        "description": "The Instagram Package can be used to build non-automated, authentic, high-quality apps and services.",
        'image': 'http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-instagram-package',
        'blocks': [{
            "name":"getAccessToken",
            "args":[
                {
                    name: "clientId",
                    type: "String",
                    info: "The client id obtained from Instagram.",
                },
                {
                    name: "clientSecret",
                    type: "String",
                    info: "The client secret obtained from Instagram.",
                }
            ],
        },
        {
            "name":"getCurrentUser",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "The access_token obtained from Instagram.",
                }
            ],
        },
        {
            "name":"getUserInformation",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "The access_token obtained from Instagram.",
                },
                {
                    name: "userId",
                    type: "String",
                    info: "The user id on Instagram.",
                }
            ],
        }]
    })
};
