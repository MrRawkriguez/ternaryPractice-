import './App.css'
import {useState} from "react" // import useState from react



/**
 * Challenge:
 * - Initialize state for 'isGoingOut' as a boolean
 * - Make it so clicking the button flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if 'isGoingOut' is 'true', "No" otherwise
*/

function App() {

  const [isGoingOut, setIsGoingOut] = useState(true) // Create a boolean for initialized state

  function toggleGoingOut () {  // Create a function to toggle true and  false
    setIsGoingOut(prevstate => !prevstate)
  }

  return (
    <main>
    <h1 className='title'>Do I feel like going out tonight?</h1>
    <button
      onClick={toggleGoingOut}
      className='value'
      aria-label={'Current answer is ${isGointOut ? "Yes" : "No"}. Click to change it.'}
      >{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}

export default App
