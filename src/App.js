import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [isactive, setIsactive] = useState(false);
  const [ispause, setIspause] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  }, [isactive, ispause])

  return (


    <div className='App' >
      {console.log(time)}
    </div>
  )
}

export default App;