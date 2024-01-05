import { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePokemon = async () => {
    setIsLoading(true);
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await res.json();
    console.log(data);
    setPokemon(data);
  };

  useEffect(() => {
    handlePokemon();
  }, []);

  //this concept appears often when we fetching/async functions
  //

  //guard clause
  if (isLoading) {
    return (<div>
      waiting for pokemon
    </div>)
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_shiny} />
    </div>
  )
}

export default App
