import SingleTask from './SingleTask'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        tasks.map( (rec) => (
            <SingleTask key = {rec.id} task = {rec} onDelete = {onDelete} onToggle = {onToggle}/>)
        )
    )
}

export default Tasks