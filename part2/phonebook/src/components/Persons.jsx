export default function Persons({nameToShow,removePerson}) {
    return (
        <>
            {nameToShow.map(person => (<div key={person.id} ><h3>{person.name} {person.number}</h3><button onClick={()=>removePerson(person.id)}>Delete</button></div>))}
        </>
    )

}