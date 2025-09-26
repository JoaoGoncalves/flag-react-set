import LightBulb from "./componentes/LightBulb"
import "./App.css";
import { useState } from 'react';

function App() {

  const [light, setLight] = useState(false);


  let fill = light ? 'lightgreen' : 'gray';

  return (

      <section className="App">
        <h1>Lampada do Génio</h1>
        <LightBulb fillColor={fill}/>
        <button onClick={ ()=> setLight(!light)}>on / off</button>
      </section>

  )
}

export default App
