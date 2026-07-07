import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personExists = persons.some(person => person.name === newName)
    if(personExists){
      window.alert(newName + ' already exixt')
    }else{
      const newPersons = [...persons, {name:newName, number:newNumber}]
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
    }
  }

    const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
    const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const nametoShow = newSearch
  ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()) )
  : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} handleSearch = {handleSearch} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} numberChange={handleNumberChange} nameChange={handleNameChange}/>
      <h2>Numbers</h2>
      <Persons nameToShow = {nametoShow}/>
    </div>
  )
}

export default App