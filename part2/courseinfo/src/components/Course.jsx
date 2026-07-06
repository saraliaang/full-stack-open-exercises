import Header from './Header'
import Content from './Content'
import Total from './Total'
import { Fragment } from 'react';


const Course = ({ courses }) => {
    return (
        <>
        {
            courses.map(course =>
            (
                <Fragment key={course.id}>
                    <Header course={course.name} />
                    <Content parts={course.parts} />
                    <Total course={course} />
                </Fragment>
                // so we dont have to use the div
            )
            )
        }
        </>
    )
}

export default Course