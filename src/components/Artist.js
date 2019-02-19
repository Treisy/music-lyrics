import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardMedia, Typography, CardContent, CardActions } from '@material-ui/core';


const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex'
    }
});

function Artist({info}) {
    const classes = useStyles();

    if (Object.keys(info).length === 0) return null;
    
    return(
        <Card>
            <CardHeader title={info.strArtist}
                        subheader={info.strGenre}
            />
            <CardMedia  image={info.strArtistThumb} 
                        title={info.strArtist}
                        className={classes.media}
            />
            <CardContent>
                <Typography component="h5"
                            variant="title" 
                            gutterBottom>
                    Biography
                </Typography>
                <Typography component="p">{info.strBiographyEN}</Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
                
                <a href={`https://${info.strWebsite}`} target="_blank" rel="noopener noreferrer">
                    <img src="../images/icon-website.png" width="30" height="30" alt="Website"/>
                </a>
                <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <img src="../images/icon-facebook.png" width="30" height="30" alt="Facebook"/>
                </a>
                <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <img src="../images/icon-twitter.png" width="30" height="30" alt="Twitter"/>
                </a>
            </CardActions>
        </Card>
    )
}

export default Artist;