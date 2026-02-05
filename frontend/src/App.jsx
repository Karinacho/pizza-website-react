import './App.css'
import { Pizza } from './features/Pizza/index.js'
import { Order } from './features/Order/index.js'
function App() {
  return (
    <>
        <Order />
      <Pizza title="Pizza" description="Pizza description"/>
    </>
  )
}

export default App
