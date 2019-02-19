import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';

function App() {

  // Use useState with 3 states
  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [info, addInfo] = useState({});

  return (
    <Fragment>
      <Form/>
    </Fragment>
  )  
}

export default App;