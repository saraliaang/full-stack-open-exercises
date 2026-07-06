import  Part  from './Part'

const Content = (props) => (
    <div>
        {props.parts.map(part=>(
            <div key={part.id}>
                <Part part={part} />
            </div>
        )
        )}
    </div>
)

export default Content