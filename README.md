
# Instagram Package
This package can be used to build apps that connect to Instagram.

Use [this tool](https://rapidsoftwaresolutions.github.io/OAuthTokenGenerator/instagram/1.html) to get a developer account and generate an OAuth access toke more quickly: [https://rapidsoftwaresolutions.github.io/OAuthTokenGenerator/instagram/1.html](https://rapidsoftwaresolutions.github.io/OAuthTokenGenerator/instagram/1.html)

Need more? Here's an [in-depth tutorial](https://goo.gl/t0ftRP) on how to use and connect to the Instagram API through RapidAPI.

## How to get credentials:
1. Go to [Instagram developer page](https://www.instagram.com/developer/).
2. Click on <kbd>Register Your Application</kbd>.
3. Click on <kbd>Register a New Client</kbd>.
4. Fill the form and click on <kbd>Register</kbd>.
5. Go to [Clients manager](https://www.instagram.com/developer/clients/manage/).
6. Click on <kbd>Manage</kbd> in youe application block.
7. Copy and save your credentials.
8. Use `Client ID` and `Client Secret` for call `Instagram.getAccessToken` method.

## Instagram.getCurrentUser
Get information about the owner of the `accessToken`.

| Field            | Type   | Description  |
| -------------    |--------| -------------|
| `accessToken`    |string  | The accessToken obtained from Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" : "{\"meta\": {\"code\": 200}, \"data\": {\"username\": \"bar\", \"bio\": \"foo\", \"website\": \"\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_155545107_a.jpg\", \"full_name\": \"Foo Bar\", \"counts\": {\"media\": 5, \"followed_by\": 13, \"follows\": 13}, \"id\": \"378302c3842\"}}"
		}
	}
}
```

## Instagram.getUserInformation
Get information about any Instagram user.

| Field            | Type   | Description  |
| -------------    |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "378302c38421"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" : "{\"meta\": {\"code\": 200}, \"data\": {\"username\": \"bar\", \"bio\": \"foo\", \"website\": \"\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_155545107_a.jpg\", \"full_name\": \"Foo Bar\", \"counts\": {\"media\": 5, \"followed_by\": 13, \"follows\": 13}, \"id\": \"378302c38421\"}}"
		}
	}
}
```

## Instagram.getCurrentUsersRecentMedia
Get the most recent media published by the owner of the access_token.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `count`           |integer | Count of media to return. |
| `minId`           |string  | Return media later than this `minId`. |
| `maxId`           |string  | Return media earlier than this `maxId`. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"count":1
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"{\"meta\": {\"code\": 200}, \"data\": [{\"attribution\": null, \"tags\": [], \"type\": \"image\", \"location\": {\"latitude\": 50.445858, \"name\": \"Avalon\", \"longitude\": 30.5101719, \"id\": 1013986062}, \"comments\": {\"count\": 0}, \"filter\": \"Lark\", \"created_time\": \"1473525145\", \"link\": \"https://www.instagram.com/p/BKLqaSnBHnm/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": null, \"user_has_liked\": false, \"id\": \"1336348239087303142_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}, {\"attribution\": null, \"tags\": [\"\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\"], \"type\": \"image\", \"location\": null, \"comments\": {\"count\": 0}, \"filter\": \"Moon\", \"created_time\": \"1472725452\", \"link\": \"https://www.instagram.com/p/BJz1HdfhvMh/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": {\"created_time\": \"1472725452\", \"text\": \"by @saffftenko \n#\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\", \"from\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}, \"id\": \"17842009366192476\"}, \"user_has_liked\": false, \"id\": \"1329639924173304609_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}]}"
		}
	}
}
```

## Instagram.getUsersRecentMedia
Get the most recent media published by a user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |
| `count`           |integer | Count of media to return. |
| `minId`           |string  | Return media later than this `minId`. |
| `maxId`           |string  | Return media earlier than this `maxId`. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "378302c38421",
	"count":1
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"{\"meta\": {\"code\": 200}, \"data\": [{\"attribution\": null, \"tags\": [], \"type\": \"image\", \"location\": {\"latitude\": 50.445858, \"name\": \"Avalon\", \"longitude\": 30.5101719, \"id\": 1013986062}, \"comments\": {\"count\": 0}, \"filter\": \"Lark\", \"created_time\": \"1473525145\", \"link\": \"https://www.instagram.com/p/BKLqaSnBHnm/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": null, \"user_has_liked\": false, \"id\": \"1336348239087303142_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}, {\"attribution\": null, \"tags\": [\"\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\"], \"type\": \"image\", \"location\": null, \"comments\": {\"count\": 0}, \"filter\": \"Moon\", \"created_time\": \"1472725452\", \"link\": \"https://www.instagram.com/p/BJz1HdfhvMh/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": {\"created_time\": \"1472725452\", \"text\": \"by @saffftenko \n#\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\", \"from\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}, \"id\": \"17842009366192476\"}, \"user_has_liked\": false, \"id\": \"1329639924173304609_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}]}"
		}
	}
}
```


## Instagram.getCurrentUsersLikedMedia
Get the list of recent media liked by the owner of the access_token.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `maxLikeId`       |string  | Return media earlier than this `maxLikeId`. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to": "{ \"data\": [{ \"location\": { \"id\": \"833\", \"latitude\": 37.77956816727314, \"longitude\": -122.41387367248539, \"name\": \"Civic Center BART\" }, \"comments\": { \"count\": 16 }, \"caption\": null, \"link\": \"http://instagr.am/p/BXsFz/\", \"likes\": { \"count\": 190 }, \"created_time\": \"1296748524\", \"images\": { \"low_resolution\": { \"url\": \"http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_6.jpg\", \"width\": 306, \"height\": 306 }, \"thumbnail\": { \"url\": \"http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_5.jpg\", \"width\": 150, \"height\": 150 }, \"standard_resolution\": { \"url\": \"http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_7.jpg\", \"width\": 612, \"height\": 612 } }, \"type\": \"image\", \"users_in_photo\": [], \"filter\": \"Earlybird\", \"tags\": [], \"id\": \"22987123\", \"user\": { \"username\": \"kevin\", \"full_name\": \"Kevin S\", \"profile_picture\": \"http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg\", \"id\": \"3\" } }, { \"videos\": { \"low_resolution\": { \"url\": \"http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4\", \"width\": 480, \"height\": 480 }, \"standard_resolution\": { \"url\": \"http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_101.mp4\", \"width\": 640, \"height\": 640 }, \"comments\": { \"count\": 2 }, \"caption\": null, \"likes\": { \"count\": 1 }, \"link\": \"http://instagr.am/p/D/\", \"created_time\": \"1279340983\", \"images\": { \"low_resolution\": { \"url\": \"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg\", \"width\": 306, \"height\": 306 }, \"thumbnail\": { \"url\": \"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg\", \"width\": 150, \"height\": 150 }, \"standard_resolution\": { \"url\": \"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_7.jpg\", \"width\": 612, \"height\": 612 } }, \"type\": \"video\", \"users_in_photo\": null, \"filter\": \"Vesper\", \"tags\": [], \"id\": \"363839373298\", \"user\": { \"username\": \"kevin\", \"full_name\": \"Kevin S\", \"profile_picture\": \"http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg\", \"id\": \"3\" }, \"location\": null } } ] }"

		}
	}
}
```

## Instagram.searchUser
Get the list of recent media liked by the owner of the access_token.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `query`*      |string  | A query string. |
| `count`       |integer  | Number of users to return. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"query": "jack",
	"count": 3
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"username\":\"jack\",\"first_name\":\"Jack\",\"profile_picture\":\"http://distillery.s3.amazonaws.com/profiles/profile_66_75sq.jpg\",\"id\":\"66\",\"last_name\":\"Dorsey\"},{\"username\":\"sammyjack\",\"first_name\":\"Sammy\",\"profile_picture\":\"http://distillery.s3.amazonaws.com/profiles/profile_29648_75sq_1294520029.jpg\",\"id\":\"29648\",\"last_name\":\"Jack\"},{\"username\":\"jacktiddy\",\"first_name\":\"Jack\",\"profile_picture\":\"http://distillery.s3.amazonaws.com/profiles/profile_13096_75sq_1286441317.jpg\",\"id\":\"13096\",\"last_name\":\"Tiddy\"}]}"
		}
	}
}
```

## Instagram.getUsersFollows
Get the list of users this user follows.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"username\":\"kevin\",\"profile_picture\":\"http://images.ak.instagram.com/profiles/profile_3_75sq_1325536697.jpg\",\"full_name\":\"Kevin Systrom\",\"id\":\"3\"},{\"username\":\"instagram\",\"profile_picture\":\"http://images.ak.instagram.com/profiles/profile_25025320_75sq_1340929272.jpg\",\"full_name\":\"Instagram\",\"id\":\"25025320\"}]}"
		}
	}
}
```

## Instagram.getUsersFollowers
Get the list of users this user is followed by.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"username\":\"kevin\",\"profile_picture\":\"http://images.ak.instagram.com/profiles/profile_3_75sq_1325536697.jpg\",\"full_name\":\"Kevin Systrom\",\"id\":\"3\"},{\"username\":\"instagram\",\"profile_picture\":\"http://images.ak.instagram.com/profiles/profile_25025320_75sq_1340929272.jpg\",\"full_name\":\"Instagram\",\"id\":\"25025320\"}]}"
		}
	}
}
```

## Instagram.getUsersRequestedBy
List the users who have requested this user's permission to follow.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"username\":\"mikeyk\",\"profile_picture\":\"http://distillery.s3.amazonaws.com/profiles/profile_4_75sq_1292324747_debug.jpg\",\"id\":\"4\"}]}"
		}
	}
}
```
## Instagram.getRelationshipToUser
Get information about a relationship to another user. Relationships are expressed using the following terms in the response:
* `outgoing_status`: Your relationship to the user. Can be 'follows', 'requested', 'none'.
* `incoming_status`: A user's relationship to you. Can be 'followed_by', 'requested_by', 'blocked_by_you', 'none'.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": \"outgoing_status\": \"none\", \"incoming_status\": \"requested_by\"}"
		}
	}
}
```

## Instagram.followUser
Follow a user.
* `outgoing_status`: Your relationship to the user. Can be 'follows', 'requested', 'none'.
* `incoming_status`: A user's relationship to you. Can be 'followed_by', 'requested_by', 'blocked_by_you', 'none'.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": \"outgoing_status\": \"requested\"}"
		}
	}
}
```

## Instagram.unfollowUser
Unfollow a user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": \"outgoing_status\": \"requested\"}"
		}
	}
}
```

## Instagram.approveUserRequest
Approve a follow request by a user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": \"outgoing_status\": \"requested\"}"
		}
	}
}
```

## Instagram.approveUserRequest
Approve a follow request by a user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": \"outgoing_status\": \"requested\"}"
		}
	}
}
```

## Instagram.ignoreUserRequest
Ignore a follow request by a user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `userId`*         |string  | The user id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"userId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": \"outgoing_status\": \"requested\"}"
		}
	}
}
```

## Instagram.getMediaInformation
Get information about a media object. Use the type field to differentiate between image and video media in the response. You will also receive the user_has_liked field which tells you whether the owner of the access_token has liked this media.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*        |string  | The media id on Instagram. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"mediaId": "XXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":{\"type\":\"image\",\"users_in_photo\":[{\"user\":{\"username\":\"kevin\",\"full_name\":\"Kevin S\",\"id\":\"3\",\"profile_picture\":\"...\"},\"position\":{\"x\":0.315,\"y\":0.9111}}],\"filter\":\"Walden\",\"tags\":[],\"comments\":{\"count\":2},\"caption\":null,\"likes\":{\"count\":1},\"link\":\"http://instagr.am/p/D/\",\"user\":{\"username\":\"kevin\",\"full_name\":\"Kevin S\",\"profile_picture\":\"...\",\"id\":\"3\"},\"created_time\":\"1279340983\",\"images\":{\"low_resolution\":{\"url\":\"http://distillery.s3.amazonaws.com/media/2010/07/16/4de37e03aa4b4372843a7eb33fa41cad_6.jpg\",\"width\":306,\"height\":306},\"thumbnail\":{\"url\":\"http://distillery.s3.amazonaws.com/media/2010/07/16/4de37e03aa4b4372843a7eb33fa41cad_5.jpg\",\"width\":150,\"height\":150},\"standard_resolution\":{\"url\":\"http://distillery.s3.amazonaws.com/media/2010/07/16/4de37e03aa4b4372843a7eb33fa41cad_7.jpg\",\"width\":612,\"height\":612}},\"id\":\"3\",\"location\":null}}"
		}
	}
}
```
#### Response VIDEO example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":{\"type\":\"video\",\"videos\":{\"low_resolution\":{\"url\":\"http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4\",\"width\":480,\"height\":480},\"standard_resolution\":{\"url\":\"http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_101.mp4\",\"width\":640,\"height\":640},\"users_in_photo\":null,\"filter\":\"Vesper\",\"tags\":[],\"comments\":{\"count\":2},\"caption\":null,\"likes\":{\"count\":1},\"link\":\"http://instagr.am/p/D/\",\"user\":{\"username\":\"kevin\",\"full_name\":\"Kevin S\",\"profile_picture\":\"...\",\"id\":\"3\"},\"created_time\":\"1279340983\",\"images\":{\"low_resolution\":{\"url\":\"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg\",\"width\":306,\"height\":306},\"thumbnail\":{\"url\":\"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg\",\"width\":150,\"height\":150},\"standard_resolution\":{\"url\":\"http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_7.jpg\",\"width\":612,\"height\":612}},\"id\":\"3\",\"location\":null}}}"
		}
	}
}
```

## Instagram.getMediaInRadius
Search for recent media in a given area.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `lat`*            |string  | Latitude of the center search coordinate. If used, lng is required. |
| `lng`*            |string  | Longitude of the center search coordinate. If used, lat is required. |
| `distance`        |integer | Default is 1km (`distance`=1000), max distance is 5km. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"lat": "48.858844",
	"lng": "2.294351"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"distance\":41.7413691946297,\"type\":\"image\",\"users_in_photo\":[],\"filter\":\"Earlybird\",\"tags\":[],\"comments\":{\"count\":2},\"caption\":null,\"likes\":{\"count\":1},\"link\":\"http://instagr.am/p/BQEEq/\",\"user\":{\"username\":\"mahaface\",\"profile_picture\":\"http://distillery.s3.amazonaws.com/profiles/profile_1329896_75sq_1294131373.jpg\",\"id\":\"1329896\"},\"created_time\":\"1296251679\",\"images\":{\"low_resolution\":{\"url\":\"http://distillery.s3.amazonaws.com/media/2011/01/28/0cc4f24f25654b1c8d655835c58b850a_6.jpg\",\"width\":306,\"height\":306},\"thumbnail\":{\"url\":\"http://distillery.s3.amazonaws.com/media/2011/01/28/0cc4f24f25654b1c8d655835c58b850a_5.jpg\",\"width\":150,\"height\":150},\"standard_resolution\":{\"url\":\"http://distillery.s3.amazonaws.com/media/2011/01/28/0cc4f24f25654b1c8d655835c58b850a_7.jpg\",\"width\":612,\"height\":612}},\"id\":\"20988202\",\"location\":null}]}"
		}
	}
}
```

## Instagram.getCommentsForMedia
Get a list of recent comments on a media object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*        |string  | The media id on Instagram. |



#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"lat": "48.858844",
	"lng": "2.294351"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"created_time\":\"1280780324\",\"text\":\"Really amazing photo!\",\"from\":{\"username\":\"snoopdogg\",\"profile_picture\":\"http://images.instagram.com/profiles/profile_16_75sq_1305612434.jpg\",\"id\":\"1574083\",\"full_name\":\"Snoop Dogg\"},\"id\":\"420\"}]}"
		}
	}
}
```

## Instagram.addCommentToMedia
Create a comment on a media object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*        |string  | The media id on Instagram. |
| `text`*           |string  | Text to post as a comment on the media object as specified in `mediaId`. |



#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"text": "This is my comment"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"meta\": {\"code\": 200\"}, \"data\": null}"
		}
	}
}
```

## Instagram.removeCommentFromMedia
Remove a comment either on the authenticated user's media object or authored by the authenticated user.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*       |string  | The media id on Instagram. |
| `comment_id`*     |string  | The comment id on Instagram. |



#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"mediaId": "XXXXXXX_XXXXX",
	"comment_id": "XXXXXXXX"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"meta\": {\"code\": 200\"}, \"data\": null}"
		}
	}
}
```

## Instagram.getLikesForMedia
Get a list of users who have liked this media.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*       |string  | The media id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"mediaId": "XXXXXXX_XXXXX",
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":[{\"username\":\"jack\",\"first_name\":\"Jack\",\"last_name\":\"Dorsey\",\"type\":\"user\",\"id\":\"66\"},{\"username\":\"sammyjack\",\"first_name\":\"Sammy\",\"last_name\":\"Jack\",\"type\":\"user\",\"id\":\"29648\"}]}"
		}
	}
}
```

## Instagram.addLikeToMedia
Create a comment on a media object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*       |string  | The media id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"mediaId": "XXXXXXX_XXXXX",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"meta\": {\"code\": 200\"}, \"data\": null}"
		}
	}
}
```

## Instagram.removeLikeFromMedia
Remove a comment on a media object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `mediaId`*       |string  | The media id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"mediaId": "XXXXXXX_XXXXX",
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"meta\": {\"code\": 200\"}, \"data\": null}"
		}
	}
}
```

## Instagram.getTagInformation
Get information about a tag object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `tagName`*        |string  | The tag name on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"tagName": "foo",
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": {\"media_count\": 472}, \"name\":\"nofilter\"}"
		}
	}
}
```

## Instagram.getTagRecentMedia
Get information about a tag object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `tagName`*        |string  | The tag name on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"tagName": "foo",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"\"data\": [{\"attribution\": null, \"tags\": [], \"type\": \"image\", \"location\": {\"latitude\": 50.445858, \"name\": \"Avalon\", \"longitude\": 30.5101719, \"id\": 1013986062}, \"comments\": {\"count\": 0}, \"filter\": \"Lark\", \"created_time\": \"1473525145\", \"link\": \"https://www.instagram.com/p/BKLqaSnBHnm/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": null, \"user_has_liked\": false, \"id\": \"1336348239087303142_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}, {\"attribution\": null, \"tags\": [\"\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\"], \"type\": \"image\", \"location\": null, \"comments\": {\"count\": 0}, \"filter\": \"Moon\", \"created_time\": \"1472725452\", \"link\": \"https://www.instagram.com/p/BJz1HdfhvMh/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": {\"created_time\": \"1472725452\", \"text\": \"by @saffftenko \n#\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\", \"from\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}, \"id\": \"17842009366192476\"}, \"user_has_liked\": false, \"id\": \"1329639924173304609_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}]}"
		}
	}
}
```

## Instagram.searchTags
Get information about a tag object.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `query`*          |string  | A valid tag name without a leading #. (eg. snowy, nofilter). |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"query": "test",
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\": [{\"media_count\": 472}, \"name\":\"test\"}]"
		}
	}
}
```

## Instagram.getLocationInformation
Get information about a location.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `locationId`*     |integer | The location id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"locationId": 1,
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {	
			"to": "{\"data\":{\"id\":\"1\",\"name\":\"Dogpatch Labs\",\"latitude\":37.782,\"longitude\":-122.387}}"
		}
	}
}
```

## Instagram.getRecentMediaFromLocation
Get a list of recent media objects from a given location.

| Field             | Type   | Description  |
| -------------     |--------| -------------|
| `accessToken`*    |string  | The accessToken obtained from Instagram. |
| `locationId`*     |integer | The location id on Instagram. |

#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"locationId": 1,
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"\"data\": [{\"attribution\": null, \"tags\": [], \"type\": \"image\", \"location\": {\"latitude\": 50.445858, \"name\": \"Avalon\", \"longitude\": 30.5101719, \"id\": 1013986062}, \"comments\": {\"count\": 0}, \"filter\": \"Lark\", \"created_time\": \"1473525145\", \"link\": \"https://www.instagram.com/p/BKLqaSnBHnm/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14280460_1748649632069678_43848281_n.jpg?ig_cache_key=MTMzNjM0ODIzOTA4NzMwMzE0Mg%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": null, \"user_has_liked\": false, \"id\": \"1336348239087303142_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}, {\"attribution\": null, \"tags\": [\"\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\"], \"type\": \"image\", \"location\": null, \"comments\": {\"count\": 0}, \"filter\": \"Moon\", \"created_time\": \"1472725452\", \"link\": \"https://www.instagram.com/p/BJz1HdfhvMh/\", \"likes\": {\"count\": 7}, \"images\": {\"low_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 320, \"height\": 320}, \"thumbnail\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 150, \"height\": 150}, \"standard_resolution\": {\"url\": \"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14052210_293440467695742_2005088558_n.jpg?ig_cache_key=MTMyOTYzOTkyNDE3MzMwNDYwOQ%3D%3D.2\", \"width\": 640, \"height\": 640}}, \"users_in_photo\": [], \"caption\": {\"created_time\": \"1472725452\", \"text\": \"by @saffftenko \n#\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430\", \"from\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}, \"id\": \"17842009366192476\"}, \"user_has_liked\": false, \"id\": \"1329639924173304609_3783043842\", \"user\": {\"username\": \"razdvatrizhepa\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_1555452107_a.jpg\", \"id\": \"3783043842\", \"full_name\": \"Dima Erokhin\"}}]}"
		}
	}
}
```


## Instagram.searchLocationsByArea	
Search for a location by geographic coordinate.

| Field                | Type   | Description  |
| -------------        |--------| -------------|
| `accessToken`*       |string  | The accessToken obtained from Instagram. |
| `lat`*               |string  | Latitude of the center search coordinate. If used, lng is required. |
| `lng`*               |string  | Longitude of the center search coordinate. If used, lat is required. |
| `distance`           |integer | Default is 500m (distance=500), max distance is 750. |
| `facebook_places_id` |integer | Returns a location mapped off of a Facebook places id. If used, lat and lng are not required. |


#### Request example
```json
{
	"accessToken": "XXXXXXX",
	"locationId": 1,
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" :"{\"data\":[{\"id\":\"788029\",\"latitude\":48.8588443,\"longitude\":2.2943506,\"name\":\"Eiffel Tower, Paris\"},{\"id\":\"545331\",\"latitude\":48.85833405966226,\"longitude\":2.294340133666991,\"name\":\"Restaurant 58 Tour Eiffel\"},{\"id\":\"421930\",\"latitude\":48.858326,\"longitude\":2.294505,\"name\":\"American Library in Paris\"}]}"
		}
	}
}
```

