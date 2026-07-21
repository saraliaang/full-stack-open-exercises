export default function Countries({countries}){
    return(
        <>
            {countries.length>10?(<p>too much countries</p>
                ):(countries.map(country=><li>{country.name.official}</li>))}
        </>
    )

}