// import { useState } from 'react'
import './App.css'
// import MyComponent from './components/my-components'
import CondicionalComponent from './components/condicional-component.jsx';

function App() {

  return (
    <div>

      <CondicionalComponent/>
      {/* <MyComponent
        title="Título via propriedades(props)"
        description="Descrição via propriedades(props)"
      /> */}
    </div>
  )
}

export default App;
