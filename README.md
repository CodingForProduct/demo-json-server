# Demo of json-server

This is a demo of [json-server](https://github.com/typicode/json-server#example).

Live demo: https://demo-json-server.herokuapp.com/

## Notes

`db.json` contains the data.

There are two branches.
- [master](https://github.com/CodingForProduct/demo-json-server): is a basic setup that can be deployed to Heroku.
- [add_auth](https://github.com/CodingForProduct/demo-json-server/tree/add_auth): requires users to pass in the api secret in order to access the api.
  - I'm using [dotenv](https://github.com/motdotla/dotenv) to keep track of `API_SECRET`
  - normally I would gitignore `.env`, but I didn't to that in this demo so you can see how to use `dotenv` to authorized the api

## Setup

install packages

```bash
$ npm install
```

start the api

```bash
$ npm run start
```
## Usage



1. see entire database

http://localhost:3001/api/db

2. see all users

http://localhost:3001/api/users

3. see user with id of 1

http://localhost:3001/api/users/1

4. see all teams

http://localhost:3001/api/teams

5. see all users that belong to a team with id 2

http://localhost:3001/api/teams/2/users

6. see user with id 1 and their team

http://localhost:3001/api/users/1?_expand=team

7. add new user.

send POST request + json containing user info  to:

http://localhost:3001/api/users


8. update existing user.

sent PUT request + json containing updated fields to:

 http://localhost:3001/api/users/1

9. delete existing user

sent DELETE request to:

http://localhost:3001/api/users/1


## Add authentication to api

```
$ git checkout add_auth
```

1. see all users

http://localhost:3001/api/users?secret=password123


2. see user with id 1 and their team

http://localhost:3001/api/users/1?_expand=team&secret=password123

