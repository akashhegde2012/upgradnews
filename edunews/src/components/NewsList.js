import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Header from "./Header/Header";
import News from "./News/NewsCard";
import useStyles from './News/styles';
const NewsList = ()=>{      
    const [news,setNews]=useState([]);
    useState(()=>{
        const getNews = async ()=>{
            const res = await axios.get('https://newsapi.org/v2/everything?q=Indian Higher Education&from=2021-10-01&apiKey=457909b7ae64421ea338512398717b66');
            setNews(res.data.articles);
        }
        getNews();
    });

    const classes = useStyles();
    return(

        <div>
            <Header/>
            {console.log(news)}
            <Container>
            <Grid className={classes.cardContainer} container>
            {news.map(lists=>
               <Grid key={lists.url} className={classes.newsCard} item md={4} sm={6}>
                    <News source={lists.source} 
                urlToImage={lists.urlToImage} 
                url={lists.url} 
                description={lists.description} 
                content={lists.content}
                author={lists.author}
                title={lists.title}
                key={lists.url}
                />
               </Grid>
            )}
            </Grid>
            </Container>
        </div>
    );
}
export default NewsList;