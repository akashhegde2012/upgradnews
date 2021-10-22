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
            const res = await axios.get('http://172.31.99.124:5000/');
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