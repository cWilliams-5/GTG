import TaskItem from './component/TaskItem';
//import Display from './component/display';


function App() {
  const taskTitle = [
    {
      title: 'Wash Car',
      dueDate : new Date(2022,8,28)
    },
    {
      title: 'Call about Karate lessons',
      dueDate: new Date(2022,9,6)
    },
    {
      title: 'Get Groceries',
      dueDate: new Date(2022,8,31)
    }
  ];
  function newTask() {
    const tempTask = {}
    let title1 = prompt('New Task');
    let date1 = prompt('Due Date');
    tempTask['title'] = title1;
    tempTask['dueDate'] = new Date(date1);
    taskTitle.push(tempTask);
    console.log(tempTask);
    console.log(taskTitle)
    return (taskTitle)
  }
  function editTask() {
    let task = prompt('Task to edit');
    for (var i in taskTitle) {
      if (taskTitle[i].title == task) {
        taskTitle[i].title = prompt('New Task');
        console.log(taskTitle);
        break;
      }
    }
    // var objIndex = taskTitle.findIndex((obj => obj.title == task))
  }
  function editDate() {
    let task = prompt('Task to edit');
    for (var i in taskTitle) {
      if (taskTitle[i].title == task) {
        taskTitle[i].dueDate = new Date(prompt('New Date'));
        console.log(taskTitle);
        break;
      }
    }
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskItem title= 'Task' dueDate= {new Date()}></TaskItem>
      <script src='C:\Users\rasae\OneDrive\Desktop\School\Bootcamps\FullStackGtG\assignments\to-do\src\component\newTask.js'></script>
      <button onClick = {newTask} >Create New Task</button><button onClick ={editTask}>Edit Task</button>
      <button onClick = {editDate}>Edit Date</button>
    
      <TaskItem title = {taskTitle[0].title} dueDate = {taskTitle[0].dueDate}></TaskItem>
      
      <TaskItem title = {taskTitle[1].title} dueDate = {taskTitle[1].dueDate}></TaskItem>

      <TaskItem title = {taskTitle[2].title} dueDate = {taskTitle[2].dueDate}></TaskItem>
      {/* <Display taskTitle></Display> */}
    </div>
  );
}
// title = 'Title' dueDate = 'Date'
export default App;
