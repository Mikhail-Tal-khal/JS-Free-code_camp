import { Counter } from './Counter.jsx'
// import { SimpleCounter } from './SimpleCounter.jsx'
import { LoginCard } from './LoginCard.jsx'
import { PrevStateCounter } from './PrevStateCounter.jsx'
import { BatchingCounter } from './BatchingCounter.jsx'

import './App.css'

function App() {

  return (
    <>
      <h1>Learning state management with react</h1> 
      {/* <Counter />  
      <LoginCard />  */}
      <BatchingCounter />
    </>
  )
}

export default App
