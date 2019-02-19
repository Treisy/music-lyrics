import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    lyric: {
        whiteSpace: 'pre-wrap'
    }
})


function Song({lyric}) {
    const classes = useStyles();

    if(lyric.length === 0) return null;

    return (
        <Fragment>
            <Card>
                <CardHeader title="Lyric Song"/>
                <CardContent>
                    <p className={classes.lyric}>{lyric}</p>
                </CardContent>
            </Card>   
        </Fragment>
        
    )
}

export default Song;