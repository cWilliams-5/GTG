import TaskItem from "./TaskItem";

function Display(taskList) {
    
    for (var i = 0; i < taskList.length; i++) {
        return (
            <div>
              <h1>To-Do List</h1>
              <TaskItem title = {taskList[i].title} dueDate = {taskList[i].dueDate}></TaskItem>
            </div>
        )
    }
    
    

}

export default Display;