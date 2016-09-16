# Instagram Package
This Package can be used to build non-automated, authentic, high-quality apps and services.

## How to get `apiKey`:
// todo

## Instagram.getAccessToken
Description will be here

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
			"to" : ""{\"meta\": {\"code\": 200}, \"data\": {\"username\": \"bar\", \"bio\": \"foo\", \"website\": \"\", \"profile_picture\": \"https://scontent.cdninstagram.com/t51.2885-19/s150x150/14063426_1759570317640473_155545107_a.jpg\", \"full_name\": \"Foo Bar\", \"counts\": {\"media\": 5, \"followed_by\": 13, \"follows\": 13}, \"id\": \"378302c3842\"}}""
		}
	}
}
```