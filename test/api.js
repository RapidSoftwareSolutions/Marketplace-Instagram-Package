const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const clientId     = 'a2e86bc51d47479199c249905affbe1c-caYDM',
      clientSecret = '2d87560d05574987aec33bee805aee57',
      accessToken  = '3783043842.a2e86bc.8af224199c7147f9a18f7ff36f5bcd8d',
      userId       = '3783043842',
      mediaId      = '1326955043588841156_3783043842',
      lat          = '45.3212',
      lng          = '46.7883',
      text         = 'api call',
      query        = 'test',
      tagName      = 'test',
      locationId   = 1;


let commentId;


describe('Get access token', () => {
    it('Redirect to instagram', () => {
        return request(app)
        .get(`/api/${global.PACKAGE_NAME}/getAccessToken?clientId=${clientId}&clientSecret=${clientSecret}`)
        .expect(302)
        .then((res) => {});
    });
});

describe('User section', () => {
    it('/getCurrentUser', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCurrentUser`)
        .send({args:{accessToken}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getUserInformation', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getUserInformation`)
        .send({args:{accessToken, userId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getCurrentUsersRecentMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCurrentUsersRecentMedia`)
        .send({args:{accessToken}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getUsersRecentMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getUsersRecentMedia`)
        .send({args:{accessToken, userId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/searchUser', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/searchUser`)
        .send({args:{accessToken, query}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getCurrentUsersLikedMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCurrentUsersLikedMedia`)
        .send({args:{accessToken}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getUsersFollows', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getUsersFollows`)
        .send({args:{accessToken}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getUsersFollowers', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getUsersFollowers`)
        .send({args:{accessToken}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/getUsersRequestedBy', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getUsersRequestedBy`)
        .send({args:{accessToken}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
    it('/followUser', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/followUser`)
        .send({args:{accessToken, userId}})
        .then((res) => {
        });
    });
    it('/unfollowUser', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/unfollowUser`)
        .send({args:{accessToken, userId}})
        .then((res) => {
        });
    });
    it('/approveUserRequest', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/approveUserRequest`)
        .send({args:{accessToken, userId}})
        .then((res) => {
        });
    });
    it('/ignoreUserRequest', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/ignoreUserRequest`)
        .send({args:{accessToken, userId}})
        .then((res) => {
        });
    });
});


describe('Comments section', () => {
    it('/getCommentsForMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCommentsForMedia`)
        .send({args:{accessToken, mediaId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/addCommentToMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/addCommentToMedia`)
        .send({args:{accessToken, mediaId, text}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
            commentId = JSON.parse(res.body.contextWrites.to)['data']['id'];
            console.log(commentId);
        });
    });

    it('/removeCommentFromMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/removeCommentFromMedia`)
        .send({args:{accessToken, mediaId, commentId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
});

describe('Media section', () => {
    it('/getMediaInformation', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getMediaInformation`)
        .send({args:{accessToken, mediaId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getMediaInRadius', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getMediaInRadius`)
        .send({args:{accessToken, lat, lng}})
        .then((res) => {
            //sandbox mode
        });
    });
});

describe('Likes section', () => {
    it('/getLikesForMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getLikesForMedia`)
        .send({args:{accessToken, mediaId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/addLikeToMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/addLikeToMedia`)
        .send({args:{accessToken, mediaId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/removeLikeFromMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/removeLikeFromMedia`)
        .send({args:{accessToken, mediaId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
});

describe('Tags section', () => {
    it('/getTagInformation', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getTagInformation`)
        .send({args:{accessToken, tagName}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getTagRecentMedia', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getTagRecentMedia`)
        .send({args:{accessToken, tagName}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/searchTags', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/searchTags`)
        .send({args:{accessToken, query}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
});

describe('Locations section', () => {
    it('/getLocationInformation', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getLocationInformation`)
        .send({args:{accessToken, locationId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getRecentMediaFromLocation', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getRecentMediaFromLocation`)
        .send({args:{accessToken, locationId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/searchLocationsByArea', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/searchLocationsByArea`)
        .send({args:{accessToken, lat, lng}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
});