import Header from './components/header.jsx'

import { useState } from 'react'




function App() {
  
  const [likes, setLikes] = useState(0)
  function handleClick(){
    return setLikes( likes + 1)
  }

  function kurangClick(){
    return setLikes( likes - 1)
  }

  function resetClick(){
    return setLikes(0)
  }

  return(
    <div>
        <Header />
        <button onClick={handleClick}>+</button>
        <button onClick={kurangClick}>-</button>
        <button onClick={resetClick}>Reset</button>
        <p>{likes}</p>
      </div>
    )

}

export default App
