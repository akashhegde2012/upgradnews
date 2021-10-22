import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    image:{
        maxWidth:'100%',
        borderRadius:'5px'
    },
    newsItem:{
        marginTop:'1em',
    },
    newsDescription:{
        padding:'2em',
    },
    newsList:{
        marginTop:'1em',
        border:'2px solid black',
    },
    left:{
        padding:'1em',
    },
    content:{
        fontSize:'2em',
    },
    cardContainer:{
        margin:'3vw'
    },
    newsCard:{
        marginTop:'5vh',
    }
  }));
  export default useStyles;