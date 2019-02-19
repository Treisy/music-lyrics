import React, {useState, useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import Form from './components/Form';
import Song from './components/Song';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    margin: '0 auto',
    width: '80%'
  },
  artistWrapper: {
    width: '50%'
  },
  songWrapper: {
    width: '50%'
  }
});

function App() {
  const classes = useStyles();

  // Use useState with 3 states
  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [info, addInfo] = useState({});

  // Read from API lyrics
  const readAPIlyric = async search => {
    
    const {artist, song} = search;
    const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    // Read url API
    const result = await axios(URL);
    
    // Save lyric in state
    addLyric(result.data.lyrics);
  }

  return (
    <Fragment>
      <Form readAPIlyric={readAPIlyric}/>

      <div className={classes.wrapper}>
        <div className={classes.artistWrapper}>Artista</div>
        <div className={classes.songWrapper}>
          <Song lyric={lyric}/>
        </div>
      </div>
    </Fragment>
  )  
}

export default App;