[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Instagram/functions?utm_source=RapidAPIGitHub_InstagramFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Instagram Package
This package can be used to build apps that connect to Instagram.

Need more? Here's an [in-depth tutorial](https://goo.gl/t0ftRP) on how to use and connect to the Instagram API through RapidAPI.

## How to get credentials:
Navigate to our [OAuth Generator](https://rapidoauth.com/instagram).

OR

Follow these instructions:

1. Go to [Instagram developer page](https://www.instagram.com/developer/).
2. Click on "Register Your Application".
3. Click on "Register a New Client".
4. Fill the form and click on "Register".
5. Go to [Clients Manager](https://www.instagram.com/developer/clients/manage/).
6. Click on "Manage" in your application block.
7. Copy and save your credentials.
8. Use your Client ID and Client Secret to call the [getAccessToken endpoint](https://rapidapi.com/package/Instagram/functions/getAccessToken)

## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```



## Instagram.getAccessToken
Generate access token for user.

| Field          | Type       | Description
|----------------|------------|----------
| clientId       | credentials| The client id obtained from Instagram.
| clientSecret   | credentials| The client secret obtained from Instagram.
| redirectUri    | String     | The redirectUri set in your application
| code           | String     | The code received from the user

## Instagram.getCurrentUser
Get information about the owner of the `accessToken`.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.

## Instagram.getUserInformation
Get information about any Instagram user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.
| userId         | String     | The user id on Instagram.

## Instagram.getCurrentUsersRecentMedia
Get the most recent media published by the owner of the access_token.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.
| minId          | String     | Return media later than this minId.
| maxId          | String     | Return media earlier than this maxId.

## Instagram.getUsersRecentMedia
Get the most recent media published by a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.
| userId         | String     | The user id on Instagram.
| minId          | String     | Return media later than this minId.
| maxId          | String     | Return media earlier than this maxId.

## Instagram.approveUserRequest
Approve a follow request by a user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.
| userId         | String     | The user id on Instagram.

## Instagram.getMediaInformation
Get information about a media object. Use the type field to differentiate between image and video media in the response. You will also receive the user_has_liked field which tells you whether the owner of the access_token has liked this media.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.
| mediaId        | String     | The media id on Instagram.

## Instagram.getMediaInRadius
Search for recent media in a given area.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Instagram.
| coordinate        | Map     | Latitude and longitude coma separated of the center search coordinate.
| distance   | String     | Default is 1km (`distance`=1000), max distance is 5km..

## Instagram.getCommentsForMedia
Get a list of recent comments on a media object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Instagram.
| mediaId        | String     | The media id on Instagram.

## Instagram.getTagInformation
Get information about a tag object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Get information about a tag object.
| tagName        | String     | The tag name on Instagram.

## Instagram.getTagRecentMedia
Get information about a tag object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Get information about a tag object.
| tagName        | String     | The tag name on Instagram.

## Instagram.searchTags
Get information about a tag object.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Get information about a tag object.
| query          | String     | A valid tag name without a leading #. (eg. snowy, nofilter).

## Instagram.getLocationInformation
Get information about a location.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Get information about a tag object.
| locationId     | String     | The location id on Instagram.

## Instagram.getRecentMediaFromLocation
Get a list of recent media objects from a given location.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Get information about a tag object.
| locationId     | String     | The locationId on Instagram.

## Instagram.searchLocationsByArea
Search for a location by geographic coordinate.

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| Get information about a tag object.
| coordinate               | Map     | Latitude and longitude coma separated of the center search coordinate.
| distance          | String     | Default is 500m (distance=500), max distance is 750.

## Instagram.searchLocationsByFacebookId
Search for a location by geographic facebook id.

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| Get information about a tag object.
| facebookpid| String     | Returns a location mapped off of a Facebook places id.
| distance          | String     | Default is 500m (distance=500), max distance is 750.
