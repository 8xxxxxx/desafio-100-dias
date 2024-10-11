// import { useState } from 'react'
import './App.css'
// import MyComponent from './components/my-components'
// import CondicionalComponent from './components/condicional-component.jsx';
// import Counter from './components/counter.jsx';
import GitHubUser from './components/git-hub-user';

function App() {

  return (
    <div>
      <GitHubUser
        userName="8xxxxxx"/>

      {/* <Counter/> */}
      {/* <CondicionalComponent/> */}
      {/* <MyComponent
        title="Título via propriedades(props)"
        description="Descrição via propriedades(props)"
      /> */}
    </div>
  )
}

export default App;
