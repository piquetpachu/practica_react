
import './App.css'
import { Contador } from './Contador.jsx'
import { TextoPlano } from './Textoplano.jsx'

function App() {
  return(
  <>
  <Contador />
  <TextoPlano nombre="nacho"/>
  <Contador />
  <TextoPlano nombre="pepe"/>
  </>
  )
}

export default App
