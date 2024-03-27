import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"; 
import { useEffect } from 'react';
import Joke from './Joke';



function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>
        this is the frontend and it is working
      </h1>
      <p>Jokes retrieved from Backend: {jokes.length}</p>
        {jokes.map((joke, index) => 
          <Joke
            key={joke.key}
            title={joke.title}
            joke={joke.content}
          />

        )}
        
    </>
  )
}

export default App
