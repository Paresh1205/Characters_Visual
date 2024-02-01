// App.js
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import './App.css'

function App() {
  const DataUrl='https://rickandmortyapi.com/api/character';
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(DataUrl)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<CharacterList data={characters}/>} />
          <Route path="/character/:id" element={<CharacterDetails url={DataUrl}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
