import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';

function App() {

  // Use useState with 3 states
  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [info, addInfo] = useState({});

  // Read from API lyrics
  const readAPIlyric = search => {
    console.log(search)
  }

  return (
    <Fragment>
      <Form readAPIlyric={readAPIlyric}/>
    </Fragment>
  )  
}

export default App;