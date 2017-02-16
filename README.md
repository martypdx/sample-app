
## Questions and Issues

* ?

## Learning Objectives

1. Create and add users by unique username and password using auth routes, mongoose and bcrypt
1. Assign tokens with payloads and authenticate them on requests using JWT

## Agenda

* Compare:
    * Authentication - are you who you say you are?
		1. signup/in username and password match, or
		2. user presents a token given to them when #1 happened
    * Authorization - are you allowed to do operation?

* Manage Users
	* Sign Up
	* Sign In
	* Password handling...
* Issue Tokens
	* Keep Users "signed in" - even across new browser
	* Stateless
	* Keep Info (like "roles" or "user name") in Payload
* Create middleware to protect routes
	* Must be "authenticated", ie have a token
	* Check user roles to provide "authorization" checks
