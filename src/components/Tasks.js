import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    
    return (
        <>
        <h2 className='task-start'>To-Do:</h2>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))}
        </>
    )
}

export default Tasks
