import  {useEffect, useState} from 'react'
import axios from 'axios'

export default function CountryDetail({country}) {
    const [weather, setWeather] = useState('')
    
    useEffect(()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=ee43510650488aaea2718707f2d091e7`)
        .then(response=>{setWeather(response.data)})
    },[])
    console.log(weather)


    return (
        <>
            <h1>{country.name.official}</h1>
            <span>Capital: </span><span>{country.capital[0]}</span><br />
            <span>Area: </span><span>{country.area}</span>
            <p>Languages:</p>
            <ul>
                {Object.entries(country.languages).map(([code, language]) => (
                    <li key={code}>
                        {language}
                    </li>
                ))}
            </ul>
            <p style={{ fontSize: '150px' }}>{country.flag}</p>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature {weather&& weather.main.temp} K</p>
            <p>Wind: {weather&&weather.wind.speed} m/s</p>
        </>
    )
}