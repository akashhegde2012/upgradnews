// const express = require('express');
// const path = require('path');
// const app = express();
// // import express from 'express';
// // import path from 'path';
// // const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000,()=>{
//     console.log('server running');
// });
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('457909b7ae64421ea338512398717b66');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});