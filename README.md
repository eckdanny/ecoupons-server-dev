## eCoupons Dev Server

Just a small example to demonstrate the desired interface.

Key features include:

 * RESTful Resources
 * Use of HTTP Headers and Cookies
 * Filter Directives in Query Strings

### Resources

asdfasdf

#### Offers

asdfasdf

#### User

asdfas

### Interactions

The server is deployed at [ecoupons.aws.af.cm][app-fog]. (You could also clone this repository and run locally with node.)

#### Retrieving Offers

`GET /offer`

asdfasdfasdf

`curl --header "appCode: 6sySN" -X GET "ecoupons.aws.af.cm/offer`

asdfasdf

`curl --cookie "uuid=123456" ...`

#### Retrieving Offers in Target Categories

Append query string to the resource URI:

`GET /offer?cat=apparel&cat=tools&cat=appliances`

#### Retrieving Categories

`@todo`

#### Retrieving Saved Offers

Only available for registered users. (Server-Side persistence) Saved offers is simply a collection of offerIds.

`curl --header "appCode: 6sySN" -X GET "http://127.0.0.1:3000/user/:userId/offer"`

#### Saving Offers

For **guest** users, this is not available (persisted only client-side if at all)?

For **registered** users, this data is associated by uuid and is encapsulated in the user object.

 [app-fog]: http://ecoupons.aws.af.cm/
