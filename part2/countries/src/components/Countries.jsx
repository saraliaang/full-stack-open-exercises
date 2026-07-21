import { useState } from 'react'
import CountryDetail from './CountryDetail'

export default function Countries({ countries }) {
    const [selectedCountry, setSelectedCountry] = useState(null)

    const showDetail = country => {
        setSelectedCountry(country)
    }


    if (countries.length > 10) {
        return <p>too much countries</p>
    }
    if (countries.length === 1) {
        console.log(countries[0])
        return <CountryDetail country={countries[0]} />
    }
    if (countries.length == 0) {
        return <p>No result found</p>
    }
    return (
        <>
            {countries.map(country => {
                return (
                    <li key={country.name.official}> {country.name.official} <button onClick={() => showDetail(country)}> Show</button ></li >)
            })}
            {selectedCountry && <CountryDetail country={selectedCountry} />}
        </>
    )

}