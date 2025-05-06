import { useState, useEffect } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const mudarCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    if(count >= 10){
      alert('Você atingiu o número máximo de contadores')
    }
  }, [count])

  const reiniciar = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <h1 className="titulo">Contador</h1>
      <p>Aperte no botão abaixo para mudar o contador</p>
      <button onClick={mudarCount} className="botao" disabled={count == 10}>Contador: {count}</button>
      <button className="botao" onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default App
