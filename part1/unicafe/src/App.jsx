import { useState } from 'react'

const StatisticLine = (props) => (
    <p>{props.text} {props.value}</p>
)

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
      <StatisticLine text='Good' value={props.good} />
      <StatisticLine text='Neutral' value={props.neutral} />
      <StatisticLine text='Bad' value={props.bad} />
      <StatisticLine text='Total' value={props.total} />
      <StatisticLine text='Avg' value= {props.total === 0 ? 0 : props.average} />
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
