import { useState } from 'react'

const Statistics = (props) =>{
  if(props.total===0)
    return(
      <>
        <h1>Statistics</h1>
        <p>No feedback gathered</p>
      </>
    )
  return(
    <>
      <h1>Statistics</h1>
      <p>Good {props.good} </p>
      <p>Neutral {props.neutral} </p>
      <p>Bad {props.bad} </p>
      <p>all {props.total}</p>
      <p>average {props.total === 0 ? 0 : props.average}</p>
    </>
  )

}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addGoodCount = () => {
    setGoodCount(goodCount+1),
    setTotal(total+1)
  }
  const addNeutralCount = () => {
    setNeutralCount(neutralCount+1),
    setTotal(total+1)
  }
  const addBadCount = () => {
    setBadCount(badCount+1),
    setTotal(total+1)
  }

  const average = total === 0 ? 0 : (goodCount - badCount) / total;


  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={addGoodCount} text="good" />
      <Button onClick={addNeutralCount} text="neutral" />
      <Button onClick={addBadCount} text="bad" />
      <Statistics good={goodCount} neutral={neutralCount} bad={badCount} average={average} total={total} />
    </>

  )
}

export default App
