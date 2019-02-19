import React, {useState, useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import Form from './components/Form';
import Song from './components/Song';
import Artist from './components/Artist';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '0',
    width: '90%',
    '@media (min-width:600px)': {
      flexWrap: 'nowrap !important',
      flexDirection: 'row',
      margin: '0 auto',
      width: '80%',
    }
  },
  sectionWrapper: {
    margin: '1rem',
    width: '100%',
    '@media (min-width:600px)': {
      order: '2',
      width: '50%',
    }
  },
  artistWrapper: {
    order: '2',
    margin: '1rem',
    width: '100%',
    '@media (min-width:600px)': {
      order: '1',
      width: '50%',
    }
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

    // Save artist in state
    addArtist(artist);
    
    // Save lyric in state
    addLyric(result.data.lyrics);
  };

  // Read from API Info Artist
  const readAPIinfo = async () => {

    if(artist) {
      const URL = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(URL);
  
      addInfo(result.data.artists[0]);
  
    }
    
  };


  useEffect(
    () => {
      readAPIinfo()
    }, [artist]
  )

  return (
    <Fragment>
      <Form readAPIlyric={readAPIlyric}/>

      <div className={classes.wrapper}>
        <div className={classes.artistWrapper}>
          <Artist info={info}/>
        </div>
        <div className={classes.sectionWrapper}>
          <Song lyric={lyric}/>
        </div>
      </div>
    </Fragment>
  )  
}

export default App;