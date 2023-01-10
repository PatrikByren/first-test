import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState("ditto");
  const [pokemonData, setPokemonData] = useState(null);

  const selectPokemonCallBack = (e) => {
    console.log(e.target.value)
    setSelectedPokemon(e.target.value);
  }
  const clickCallBack = () => {
    setCount(count + 1)
  }
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const fetchSelectedPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonData(JSON.parse(result)))
      .catch(error => console.log('error', error));

  }
  useEffect(() => {
    fetchSelectedPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Backend Testing</h1>
      <hr />
      <input value={selectedPokemon} onChange={selectPokemonCallBack} type="text" />
      <button onClick={fetchSelectedPokemon}>Select Pokemon</button>
      <p>{count}</p>
      <button onClick={clickCallBack}>Increse</button>
      <h2>
        {pokemonData?.name}
      </h2>
      <h3>
        Abilities
      </h3>
      <ul>
        {
          pokemonData?.abilities.map((abilityItem) => {
            return <li key={abilityItem.slot}>{abilityItem.ability.name}</li>
          })
        }
      </ul>

    </div >
  );

}

export default App;
