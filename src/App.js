import JokeCategories from "./JokeCategory"
import './App.css';
import React,{ useState, useEffect } from 'react';
import Joke from "./Jokes";

function App() {
  const [selectCategory, setSelectedCategory]= useState([])
  return (
    <div className="App">
      <JokeCategories setCategory={setSelectedCategory}/>
      <Joke category={selectCategory}/>
    </div>
  );
}

export default App;
