
// common js
// const express = require("express")
// require('dotenv').config()

// module js
import express from "express"
import 'dotenv/config'

const app = express()
// const port = 3000

const githubData = {
  "login": "Naman2004singh",
  "id": 170737593,
  "node_id": "U_kgDOCi0_uQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/170737593?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Naman2004singh",
  "html_url": "https://github.com/Naman2004singh",
  "followers_url": "https://api.github.com/users/Naman2004singh/followers",
  "following_url": "https://api.github.com/users/Naman2004singh/following{/other_user}",
  "gists_url": "https://api.github.com/users/Naman2004singh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Naman2004singh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Naman2004singh/subscriptions",
  "organizations_url": "https://api.github.com/users/Naman2004singh/orgs",
  "repos_url": "https://api.github.com/users/Naman2004singh/repos",
  "events_url": "https://api.github.com/users/Naman2004singh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Naman2004singh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Naman Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 25,
  "public_gists": 0,
  "followers": 3,
  "following": 2,
  "created_at": "2024-05-24T13:46:47Z",
  "updated_at": "2026-06-14T18:50:29Z"
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) =>{
    res.send("Naman.com")
})

app.get('/login', (req, res) =>{
    res.send('<h1>Login please</h1>')
})

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Listen on port ${process.env.PORT}`);
})