export default function Filter(props) {
    return (<>
        <p>filter shown with</p>
        <input value={props.newSearch} onChange={props.handleSearch} />
    </>)
}