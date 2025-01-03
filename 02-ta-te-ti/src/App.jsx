import { children } from "react"
import { useState } from "react"

const Turn = {
  x:'X',
  o:'O'
}

const Cuadrado = ({children,isSelected,actualizaTablero,index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const hacerclick = () => {
    actualizaTablero(index)
  }
  return (
    <div onClick={hacerclick} className={className}>{children}</div>
  )  
}

function App ()  {
  const [tablero,setTablero] = useState(Array(9).fill(null))
  console.log(tablero)

  const [turn,setTurn] = useState(Turn.x) 

  const actualizaTablero = (index) =>{
    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turn
    setTablero(nuevoTablero)
    const nuevoTurno = turn === Turn.x ? Turn.o : Turn.x
    setTurn(nuevoTurno)
  }
  return (
    <main className=" board">
      <h1>Ta-Te-Ti</h1>
      <section className="game">
        {
          tablero.map((_, index) => {
            console.log(`index ${tablero[index]}`)
            return (
            <Cuadrado 
            key={index} index={index} actualizaTablero={actualizaTablero}>{tablero[index]}</Cuadrado>
            )
          }) 
        }
      </section>
      <section className="turn">
        <Cuadrado isSelected={turn === Turn.x}>{Turn.x}</Cuadrado>
        <Cuadrado isSelected={turn === Turn.o}>{Turn.o}</Cuadrado>
      </section>
    </main>
  )
}

export default App