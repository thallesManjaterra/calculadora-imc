import { data } from './data/data'
import './App.css'
import { ImcCalc } from './components/ImcCalc'
import { useState } from 'react'
import { ImcTable } from './components/ImcTable'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  const calcImc = (e, height, weight) => {
    e.preventDefault()
    if (!weight || !height) return
    const heightFloat = +height.replace(',', '.')
    const weightFloat = +weight.replace(',', '.')

    const imc = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    setImc(imc)

    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if (!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault()
    setImc('')
    setInfo('')
    setInfoClass('')
  }

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  )
}

export default App
