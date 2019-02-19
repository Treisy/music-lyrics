import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles({
    hero: {
        backgroundImage: 'url("./images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px'
    },
    title: {
        color: '#ffffff !important',
        paddingTop: '2rem',
        textAlign: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        '@media (min-width:600px)': {
            flexDirection: 'row',
            
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        minHeight: '13rem',
        margin: 'auto',
        paddingBottom: '1.2rem',
        width: '80%', 
        '@media (min-width:600px)': {
            minHeight: '10rem',
        }
    },
    btn: {
        height: '40px',
        alignSelf: 'stretch',
        marginTop: '1.1rem !important',
        '@media (min-width:600px)': {
            alignSelf: 'flex-end',
        }
    }
});

function Form({readAPIlyric}) {
    const classes = useStyles();

    const [search, addSearch] = useState({
        artist: '',
        song: ''
    });

    // Update input state
    const updateState = e => {
        addSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const handle_onSubmit = e => {
        e.preventDefault();

        readAPIlyric(search);
    };

    return (
        <div className={classes.hero}>
            <Typography component="h2"
                        variant="display2" 
                        gutterBottom
                        className={classes.title}
            >
                Search Lyrics
            </Typography>
            <Paper className={classes.wrapper}>
                <form   onSubmit={handle_onSubmit}
                        className={classes.formContainer} 
                        noValidate 
                        autoComplete="off"
                >
                    <TextField  id="artist" 
                                label="Artist"
                                placeholder="Search Artist"
                                margin="normal"
                                name="artist"
                                onChange={updateState}
                    />
                    <TextField  id="song" 
                                label="Song"
                                placeholder="Search Song"
                                margin="normal"
                                name="song"
                                onChange={updateState}
                    />
                    <Button variant="contained" 
                            color="primary" 
                            type="submit"
                            className={classes.btn}
                    >
                        Search
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default Form;