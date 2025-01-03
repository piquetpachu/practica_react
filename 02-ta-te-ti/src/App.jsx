import { children } from "react"
import { useState } from "react"

const Turn = {
  x:'X',
  o:'O'
}

const combosGanadores = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

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

  const [ganador,setGanador] = useState(null)

  const checkJuego = (nuevoTablero) => {
    return nuevoTablero.every(Cuadrado => Cuadrado !== null)
  }

  const hayGanador = (checkTablero) => {
    for (const combos of combosGanadores) {
      const [a,b,c] = combos
      if (checkTablero[a] && checkTablero[a] === checkTablero[b] && checkTablero[a] === checkTablero[c]){
        return checkTablero[a]
      }
    }
    return null 
  }
  const reset = () =>{
    setTablero(Array(9).fill(null))
    setTurn(Turn.x)
    setGanador(null)
  }
    
  const actualizaTablero = (index) =>{
    if(tablero[index] || ganador) return 

    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turn
    setTablero(nuevoTablero)

    const nuevoTurno = turn === Turn.x ? Turn.o : Turn.x
    setTurn(nuevoTurno)
    
    const elGanador = hayGanador(nuevoTablero)
    if (elGanador){
      setGanador(elGanador)
    } else if(checkJuego(nuevoTablero)){
      setGanador(false)
    }


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
      {ganador !== null && (
      <section className="winner">
        <div className="text">
          <h2>{ganador === false ? 'Empate':'ganador '}</h2>
          <header>
            {ganador && <Cuadrado>{ganador}</Cuadrado>}
          </header>
          <footer>
            <button onClick={reset}>empezar de nuevo</button>
          </footer>
        </div>
      </section>
      )
      }
    </main>
  )
}

export default App