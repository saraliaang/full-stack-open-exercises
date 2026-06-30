import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  const [votes, setVote] = useState([0,0,0,0,0,0,0,0]);
  const [maxVoteIndex, setMaxVote] = useState(0);




  const randomize =  () => {
    const ranNum = Math.floor(Math.random()*(anecdotes.length));
    setSelected(ranNum);
  }

  const addVote = () => {
    const newVote = [...votes];
    newVote[selected]+=1;
    setVote(newVote);
    console.log(newVote);
  }

  for(let i =0; i<votes.length;i++){
    if(votes[maxVoteIndex]<votes[i]){
      setMaxVote(i)
    }
  }

  return (
    <>
      <div>
      {anecdotes[selected]}
      </div>
      <p>Has {votes[selected]} votes</p>
      <button onClick ={addVote} >vote </button>
      <button onClick={randomize}>NEXT anecdote</button>
      <p>Anecdote with the most vote</p>
      <p>{anecdotes[maxVoteIndex]}</p>
      <p>has {votes[maxVoteIndex]} votes</p>ç
    </>

  )
}


export default App