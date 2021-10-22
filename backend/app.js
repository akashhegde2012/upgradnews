import express from 'express';
import cors from 'cors'
import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('457909b7ae64421ea338512398717b66');
const app = express();
app.use(cors());
app.get('/',(req,res)=>{
    newsapi.v2.everything({
        q: 'Indian Higher Education',
        language: 'en',
        from: '2021-09-22',
        
      }).then(response => {
        res.json(response).status(200);
      });
});
app.listen(5000,()=>{
    console.log('server running in port 5000');
});