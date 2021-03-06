import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please specify a task!')
            return
        }

        onAdd({ text, day, reminder, time })

        setText('')
        setTime('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmit}> 
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type="date" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" type="submit" value="Save task" />
        </form>
    )
}

export default AddTask
