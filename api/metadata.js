module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Instagram',
        "tagline": "Instagram Package",
        "description": "The Instagram Package can be used to build non-automated, authentic, high-quality apps and services.",
        'image': 'http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-instagram-package',
        'accounts': {
            'domain': 'instagram.com',
            'credentials': [
                'accessToken'
            ]
        },
        'blocks': [{
            "name":"getCurrentUser",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getUserInformation",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getCurrentUsersRecentMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Count of media to return.",
                    required: false,
                },
                {
                    name: "minId",
                    type: "String",
                    info: "Return media later than this minId.",
                    required: false,
                },
                {
                    name: "maxId",
                    type: "String",
                    info: "Return media earlier than this maxId.",
                    required: false,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getUsersRecentMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Count of media to return.",
                    required: false,
                },
                {
                    name: "minId",
                    type: "String",
                    info: "Return media later than this minId.",
                    required: false,
                },
                {
                    name: "maxId",
                    type: "String",
                    info: "Return media earlier than this maxId.",
                    required: false,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getCurrentUsersLikedMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "maxLikeId",
                    type: "String",
                    info: "Return media liked before this id.",
                    required: false
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"searchUser",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "query",
                    type: "String",
                    info: "Required: A query string.",
                    required: true
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of users to return.",
                    required: false
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getUsersFollows",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getUsersFollowers",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getUsersRequestedBy",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getRelationshipToUser",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: false,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"followUser",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"unfollowUser",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"approveUserRequest",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"ignoreUserRequest",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: The user id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getMediaInformation",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getMediaInRadius",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: false,
                },
                {
                    name: "lat",
                    type: "String",
                    info: "Required: Latitude of the center search coordinate. If used, lng is required.",
                    required: true,
                },
                {
                    name: "lng",
                    type: "String",
                    info: "Required: Longitude of the center search coordinate. If used, lat is required.",
                    required: true,
                },
                {
                    name: "distance",
                    type: "String",
                    info: "Default is 1km (`distance`=1000), max distance is 5km..",
                    required: false,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getCommentsForMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"addCommentToMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                },
                {
                    name: "text",
                    type: "String",
                    info: "Required: Text to post as a comment on the media object as specified in media-id.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"removeCommentFromMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                },
                {
                    name: "commentId",
                    type: "String",
                    info: "Required: The comment id on Instagram.",
                    required: true,
                }
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getLikesForMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"addLikeToMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"removeLikeFromMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: The access_token obtained from Instagram.",
                    required: true,
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "Required: The media id on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getTagInformation",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: Get information about a tag object.",
                    required: true,
                },
                {
                    name: "tagName",
                    type: "String",
                    info: "Required: The tag name on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getTagRecentMedia",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: Get information about a tag object.",
                    required: true,
                },
                {
                    name: "tagName",
                    type: "String",
                    info: "Required: The tag name on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"searchTags",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: Get information about a tag object.",
                    required: true,
                },
                {
                    name: "query",
                    type: "String",
                    info: "Required: A valid tag name without a leading #. (eg. snowy, nofilter).",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getLocationInformation",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: Get information about a tag object.",
                    required: true,
                },
                {
                    name: "locationId",
                    type: "String",
                    info: "Required: The location id on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getRecentMediaFromLocation",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: Get information about a tag object.",
                    required: true,
                },
                {
                    name: "locationId",
                    type: "String",
                    info: "Required: The locationId on Instagram.",
                    required: true,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"searchLocationsByArea",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Required: Get information about a tag object.",
                    required: true,
                },
                {
                    name: "lat",
                    type: "String",
                    info: "Required: Latitude of the center search coordinate. If used, lng is required.",
                    required: true,
                },
                {
                    name: "lng",
                    type: "String",
                    info: "Required: Longitude of the center search coordinate. If used, lat is required.",
                    required: true,
                }, 
                {
                    name: "facebook_places_id",
                    type: "String",
                    info: "Returns a location mapped off of a Facebook places id. If used, lat and lng are not required.",
                    required: false,
                },
                {
                    name: "distance",
                    type: "String",
                    info: "Default is 500m (distance=500), max distance is 750.",
                    required: false,
                },
            ],
            'callbacks':[
                    {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },]
    })
};
