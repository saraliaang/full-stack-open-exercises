import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)

  const addGoodCount = () =>{setGoodCount(goodCount+1)}
  const addNeutralCount = () =>{setNeutralCount(neutralCount+1)}
  const addBadCount = () =>{setBadCount(badCount+1)}


  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button onClick={()=>addGoodCount()} text="good" />
        <Button onClick={()=>addNeutralCount()} text="neutral" />
        <Button onClick={()=>addBadCount()} text="bad" />
      </div>
      <h1>Statistics</h1>
      <p>Good {goodCount} </p>
      <p>Neutral {neutralCount} </p>
      <p>Bad {badCount} </p>
    </>

  )
}

export default App