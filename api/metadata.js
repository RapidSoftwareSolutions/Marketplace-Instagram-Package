module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Instagram',
        "tagline": "Instagram Package",
        "keywords": ["API", "Facebook", "image", "images", "marketing", "picture", "social", "video", "visual"],
        "description": "The Instagram Package can be used to build non-automated, authentic, high-quality apps and services.",
        'image': 'http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-instagram-package',
        'accounts': {
            'domain': 'instagram.com',
            'credentials': [
                'accessToken'
            ]
        },
        "steps":[
          "Navigate to our OAuth Generator https://rapidoauth.com/instagram"
        ],
        'blocks': [
          {
              "name":"getAccessToken",
              "description": "Generate access token for user.",
              "args":[
                  {
                      name: "clientId",
                      type: "credentials",
                      info: "The clientId obtained from Instagram.",
                      required: true,
                      generator: "http://rapidoauth.com/instagram"
                  },
                  {
                      name: "clientSecret",
                      type: "credentials",
                      info: "The clientSecret obtained from Instagram.",
                      required: true,
                      generator: "http://rapidoauth.com/instagram"
                  },
                  {
                      name: "redirectUri",
                      type: "String",
                      info: "The redirectUri set in your application",
                      required: true,
                      generator: "http://rapidoauth.com/instagram"
                  },
                  {
                      name: "code",
                      type: "String",
                      info: "The code received from the user",
                      required: true,
                      generator: "http://rapidoauth.com/instagram"
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
            "name":"getCurrentUser",
            "description": "Get information about the owner of the `accessToken`.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
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
            "description": "Get information about any Instagram user.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "userId",
                    type: "String",
                    info: "The user id on Instagram.",
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
            "description": "Get the most recent media published by the owner of the access_token.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
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
            "description": "Get the most recent media published by a user.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "userId",
                    type: "String",
                    info: "The user id on Instagram.",
                    required: true,
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
            "name":"getMediaInformation",
            "description": "Get information about a media object. Use the type field to differentiate between image and video media in the response. You will also receive the user_has_liked field which tells you whether the owner of the access_token has liked this media.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "The media id on Instagram.",
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
            "description": "Search for recent media in a given area.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: false,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                  name: "coordinate",
                  type: "Map",
                  info: "Latitude and longitude coma separated of the center search coordinate.",
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
            "description": "Get a list of recent comments on a media object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The access_token obtained from Instagram.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "mediaId",
                    type: "String",
                    info: "The media id on Instagram.",
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
            "name":"getTagInformation",
            "description": "Get information about a tag object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "tagName",
                    type: "String",
                    info: "The tag name on Instagram.",
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
            "description": "Get information about a tag object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "tagName",
                    type: "String",
                    info: "The tag name on Instagram.",
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
            "description": "Get information about a tag object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "query",
                    type: "String",
                    info: "A valid tag name without a leading #. (eg. snowy, nofilter).",
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
            "description": "Get information about a location.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "locationId",
                    type: "String",
                    info: "The location id on Instagram.",
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
            "description": "Get a list of recent media objects from a given location.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "locationId",
                    type: "String",
                    info: "The locationId on Instagram.",
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
            "description": "Search for a location by geographic coordinate.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },
                {
                    name: "coordinate",
                    type: "Map",
                    info: "Latitude and longitude coma separated of the center search coordinate.",
                    required: true,
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
        },
        {
            "name":"searchLocationsByFacebookId",
            "description": "Search for a location by facebookId",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Get information about a tag object.",
                    required: true,
                    generator: "http://rapidoauth.com/instagram"
                },

                {
                    name: "facebookpid",
                    type: "String",
                    info: "Returns a location mapped off of a Facebook places id. If used, lat and lng are not required.",
                    required: true,
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
        },
      ]
    })
};
