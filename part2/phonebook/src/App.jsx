import { useState, useEffect } from 'react'
import personService from './services/phone'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(response =>{
        setPersons(response.data)
      })
  },[])


  const addPerson = (event) => {
    event.preventDefault()
    const personExists = persons.some(person => person.name === newName)
    if(personExists){
      window.alert(newName + ' already exixt')
    }else{
      personService
        .create({
          name:newName,
          number:newNumber,
        })
        .then(returnedPerson=>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (id) => {
    personService
      .remove(id)
      .then(deletedPerson=>{
        const updatedPersons = persons.filter(person => person.id !== id);
        setPersons(updatedPersons)
      })
  }


    const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
    const handleNumberChange = (event) => {
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
      <Persons nameToShow = {nametoShow} removePerson={removePerson}/>
    </div>
  )
}

export default App