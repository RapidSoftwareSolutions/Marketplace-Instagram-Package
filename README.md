# Instagram Package
The Instagram Package can be used to build non-automated, authentic, high-quality apps and services.
* Domain: instagram.com
* Credentials: accessToken

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
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.


## Instagram.getUserInformation
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.


## Instagram.getCurrentUsersRecentMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| count      | Number     | Count of media to return.
| minId      | String     | Return media later than this minId.
| maxId      | String     | Return media earlier than this maxId.


## Instagram.getUsersRecentMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.
| count      | Number     | Count of media to return.
| minId      | String     | Return media later than this minId.
| maxId      | String     | Return media earlier than this maxId.


## Instagram.getCurrentUsersLikedMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| maxLikeId  | String     | Return media liked before this id.


## Instagram.searchUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| query      | String     | Required: A query string.
| count      | String     | Number of users to return.


## Instagram.getUsersFollows
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.


## Instagram.getUsersFollowers
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.


## Instagram.getUsersRequestedBy
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.


## Instagram.getRelationshipToUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.


## Instagram.followUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.


## Instagram.unfollowUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.


## Instagram.approveUserRequest
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.


## Instagram.ignoreUserRequest
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.


## Instagram.getMediaInformation
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.


## Instagram.getMediaInRadius
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Instagram.
| lat        | String     | Required: Latitude of the center search coordinate. If used, lng is required.
| lng        | String     | Required: Longitude of the center search coordinate. If used, lat is required.
| distance   | String     | Default is 1km (`distance`=1000), max distance is 5km..


## Instagram.getCommentsForMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.


## Instagram.addCommentToMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.
| text       | String     | Required: Text to post as a comment on the media object as specified in media-id.


## Instagram.removeCommentFromMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.
| commentId  | String     | Required: The comment id on Instagram.


## Instagram.getLikesForMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.


## Instagram.addLikeToMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.


## Instagram.removeLikeFromMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: The access_token obtained from Instagram.
| mediaId    | String     | Required: The media id on Instagram.


## Instagram.getTagInformation
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Get information about a tag object.
| tagName    | String     | Required: The tag name on Instagram.


## Instagram.getTagRecentMedia
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Get information about a tag object.
| tagName    | String     | Required: The tag name on Instagram.


## Instagram.searchTags
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Get information about a tag object.
| query      | String     | Required: A valid tag name without a leading #. (eg. snowy, nofilter).


## Instagram.getLocationInformation
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Get information about a tag object.
| locationId | String     | Required: The location id on Instagram.


## Instagram.getRecentMediaFromLocation
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Get information about a tag object.
| locationId | String     | Required: The locationId on Instagram.


## Instagram.searchLocationsByArea
Method description

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| Required: Get information about a tag object.
| lat               | String     | Required: Latitude of the center search coordinate. If used, lng is required.
| lng               | String     | Required: Longitude of the center search coordinate. If used, lat is required.
| facebook_places_id| String     | Returns a location mapped off of a Facebook places id. If used, lat and lng are not required.
| distance          | String     | Default is 500m (distance=500), max distance is 750.

