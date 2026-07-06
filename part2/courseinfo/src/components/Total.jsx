const Total = (props) => <p>Number of exercises {props.course.parts.reduce((total,part)=>part.exercises+total,0)}</p>
export default Total