import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from '../styles';

const NewsItem = ({source,urlToImage,url, author, title, description, content})=>{
    const classes = useStyles();

    return (
            <React.Fragment>

                <Container className={classes.newsList}  >
                    <Grid className={classes.newsItem}   container>
                        <Grid className={classes.left} item md={5} sm={12}>
                            <Grid   container>
                                <h1>{title}</h1>
                                <img className={classes.image} src={urlToImage} alt={urlToImage}/>
                            </Grid>
                        </Grid>
                        <Grid className={classes.right} className={classes.newsDescription} item md={7} sm={12}>
                            <div className={classes.content}>
                                {content}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
}
export default NewsItem;