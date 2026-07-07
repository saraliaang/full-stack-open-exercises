export default function Persons(props){

    return(
        <>
        {props.nameToShow.map(person => (<div key={person.id} ><h3>{person.name} {person.number}</h3></div>))}
        </>
    )

}