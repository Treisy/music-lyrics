import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Form from './components/Form';

function App() {

  // Use useState with 3 states
  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [info, addInfo] = useState({});

  // Read from API lyrics
  const readAPIlyric = async search => {
    const {artist, song} = search;
    const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    // Read API
    const result = await axios(URL);
    
    // Save lyric in state
    addLyric(result.data.lyrics);
  }

  return (
    <Fragment>
      <Form readAPIlyric={readAPIlyric}/>
    </Fragment>
  )  
}

export default App;