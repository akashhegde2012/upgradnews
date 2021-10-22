import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';

import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import { ArrowRightAlt } from '@material-ui/icons';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '&:hover':{
        transform: 'translateY(-10px)',
        boxShadow: '1em 1em 1em -0.4em black',
        cursor:'pointer',
      },
    transition: 'All 0.3s'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const News = ({source,urlToImage,url, author, title, description, content})=> {
  const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={urlToImage}
        title={title}
      />
      <CardContent>
          <h2>
              {title}
          </h2>
        <div>
          {description.substring(0,100)}....
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        {/* eslint-disable-next-line */}
        <a href={url} target='_blank' ><ArrowRightAlt/></a>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <a href={url} ></a> */}
       
      </CardActions>
      
    </Card>
  );
}
export default News;