import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    lyric: {
        whiteSpace: 'pre-wrap'
    },
    title: {
        borderBottom: '3px solid #EB6864',
        marginBottom: '2rem',
        paddingBottom: '10px'
    }
})


function Song({lyric}) {
    const classes = useStyles();

    if(lyric.length === 0) return null;

    return (
        <Fragment>
            <h2 className={classes.title}>Lyric Song</h2>  
            <p className={classes.lyric}>{lyric}</p>
        </Fragment>
        
    )
}

export default Song;