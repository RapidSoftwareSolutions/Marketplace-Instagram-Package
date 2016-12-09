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

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.

## Instagram.getUserInformation
Get information about any Instagram user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| userId         | String     | Required: The user id on Instagram.

## Instagram.getCurrentUsersRecentMedia
Get the most recent media published by the owner of the access_token.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| count          | Number     | Count of media to return.
| minId          | String     | Return media later than this minId.
| maxId          | String     | Return media earlier than this maxId.

## Instagram.getUsersRecentMedia
Get the most recent media published by a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| userId         | String     | Required: The user id on Instagram.
| count          | Number     | Count of media to return.
| minId          | String     | Return media later than this minId.
| maxId          | String     | Return media earlier than this maxId.

## Instagram.getCurrentUsersLikedMedia
Get the list of recent media liked by the owner of the access_token.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| maxLikeId      | String     | Return media liked before this id.

## Instagram.searchUser
Get the list of recent media liked by the owner of the access_token.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| query          | String     | Required: A query string.
| count          | String     | Number of users to return.

## Instagram.getUsersFollows
Get the list of users this user follows.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.

## Instagram.getUsersFollowers
Get the list of users this user is followed by.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.

## Instagram.getUsersRequestedBy
List the users who have requested this user's permission to follow.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.

## Instagram.getRelationshipToUser
Get information about a relationship to another user. Relationships are expressed using the following terms in the response:

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Instagram.
| userId     | String     | Required: The user id on Instagram.

## Instagram.followUser
Follow a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| userId         | String     | Required: The user id on Instagram.

## Instagram.unfollowUser
Unfollow a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| userId         | String     | Required: The user id on Instagram.

## Instagram.approveUserRequest
Approve a follow request by a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| userId         | String     | Required: The user id on Instagram.

## Instagram.ignoreUserRequest
Ignore a follow request by a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| userId         | String     | Required: The user id on Instagram.

## Instagram.getMediaInformation
Get information about a media object. Use the type field to differentiate between image and video media in the response. You will also receive the user_has_liked field which tells you whether the owner of the access_token has liked this media.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.

## Instagram.getMediaInRadius
Search for recent media in a given area.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Instagram.
| lat        | String     | Required: Latitude of the center search coordinate. If used, lng is required.
| lng        | String     | Required: Longitude of the center search coordinate. If used, lat is required.
| distance   | String     | Default is 1km (`distance`=1000), max distance is 5km..

## Instagram.getCommentsForMedia
Get a list of recent comments on a media object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.

## Instagram.addCommentToMedia
Create a comment on a media object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.
| text           | String     | Required: Text to post as a comment on the media object as specified in media-id.

## Instagram.removeCommentFromMedia
Remove a comment either on the authenticated user's media object or authored by the authenticated user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.
| commentId      | String     | Required: The comment id on Instagram.

## Instagram.getLikesForMedia
Get a list of users who have liked this media.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.

## Instagram.addLikeToMedia
Create a comment on a media object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.

## Instagram.removeLikeFromMedia
Remove a comment on a media object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: The access_token obtained from Instagram.
| mediaId        | String     | Required: The media id on Instagram.

## Instagram.getTagInformation
Get information about a tag object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: Get information about a tag object.
| tagName        | String     | Required: The tag name on Instagram.

## Instagram.getTagRecentMedia
Get information about a tag object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: Get information about a tag object.
| tagName        | String     | Required: The tag name on Instagram.

## Instagram.searchTags
Get information about a tag object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: Get information about a tag object.
| query          | String     | Required: A valid tag name without a leading #. (eg. snowy, nofilter).

## Instagram.getLocationInformation
Get information about a location.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: Get information about a tag object.
| locationId     | String     | Required: The location id on Instagram.

## Instagram.getRecentMediaFromLocation
Get a list of recent media objects from a given location.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: Get information about a tag object.
| locationId     | String     | Required: The locationId on Instagram.

## Instagram.searchLocationsByArea
Search for a location by geographic coordinate.

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| Required: Get information about a tag object.
| lat               | String     | Required: Latitude of the center search coordinate. If used, lng is required.
| lng               | String     | Required: Longitude of the center search coordinate. If used, lat is required.
| facebook_places_id| String     | Returns a location mapped off of a Facebook places id. If used, lat and lng are not required.
| distance          | String     | Default is 500m (distance=500), max distance is 750.

