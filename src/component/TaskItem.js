import './task.css';

function TaskItem(props) {
    
    
    
    return (
        <div className= "task-item">
            <div className='task-item_title'>
                <h2> {props.title} </h2>
                <div className='task-item_due_date'> {props.dueDate.toISOString()} </div>
            </div> 
        </div>
    );

}

export default TaskItem;