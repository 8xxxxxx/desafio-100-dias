import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); // Clock status (Running or not)

  useEffect(() => {
    let interval;

    if(running) {
      interval = setInterval(() => { // Defining an effect for updating
        setTime((prevTime) => prevTime + 10);
      }, 10)
    } else { // If the timer is not running
      clearInterval(interval); // Clearing the time range
    }
      return () => clearInterval(interval) // Standard cleaning function
  }, [running]);

  return (
    <>
      <h1>Timer</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60))}: </span>
        <span>{("0" + Math.floor((time / 1000) % 60))}: </span>
        <span>{("0" + Math.floor((time / 10) % 100))}: </span>
      </div>

      <div>
        {running ? (<button onClick={() => (setRunning(false))}>Stop</button>):(<button onClick={() => (setRunning(true))}>Start</button>)}
        <button onClick={() => {
                                setRunning(0);
                                setTime(0);                                                      
        }}>Reset</button>
      </div>
    </>
  )
}

export default App;
