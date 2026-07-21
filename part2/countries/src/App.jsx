import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = search
    ? countries.filter(country => country.name.official.toLowerCase().includes(search.toLowerCase()))
    : []

  if (countries == null) {
    return null
  }

  return (
    <>
      <p>find countries</p>
      <input value={search} onChange={handleSearch} /><br />
      {search.trim() !== '' && (
        <Countries countries={countriesToShow} />
      )}
    </>
  )
}

export default App
