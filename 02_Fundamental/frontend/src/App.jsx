import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  // callback and dependency array, to request
  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
    .then((respose) =>{
      setjokes(respose.data)
    })
    .catch((err) =>{
      console.log(err);
      
    })
  })

  return (
    <>
      <h1>Chai And Full stack</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((jokes) =>{
          <div key = {jokes.id}>
            <h3>{jokes.joke}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
