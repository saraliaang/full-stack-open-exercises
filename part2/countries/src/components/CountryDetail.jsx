export default function CountryDetail({country}) {
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
        </>
    )
}