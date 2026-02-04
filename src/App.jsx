import './App.css'
import { Pizza } from './features/Pizza'
import { Order } from './features/Order'
function App() {
  return (
    <>
        <Order />
      <Pizza title="Pizza" description="Pizza description"/>
    </>
  )
}

export default App
