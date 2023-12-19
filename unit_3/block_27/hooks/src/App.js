import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Beer from './components/Beer';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(()=> {
    async function getBeers() {
      const response = await fetch('https://api.punkapi.com/v2/beers');
      const data = await response.json();
      setBeers(data);
    }
    getBeers();
  },[])

  return (
    <div>
      {beers.map((beer) =>
        <Beer title={beer.name} desc={beer.description} />
      )}
    </div>
  );
}

export default App;
