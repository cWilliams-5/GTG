import TaskItem from './component/TaskItem';

function App() {
  const taskTitle = [
    {
      id : 1,
      title: 'Wash Car',
      dueDate : new Date(2022,8,28)
    },
    {
      id: 2,
      title: 'Call about Karate lessons',
      dueDate: new Date(2022,9,6)
    },
    {
      id: 3,
      title: 'Get Groceries',
      dueDate: new Date(2022,8,31)
    }
  ];

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskItem title= 'Task' dueDate= {new Date()}></TaskItem>
      <TaskItem title = {taskTitle[0].title} dueDate = {taskTitle[0].dueDate}></TaskItem>
      <TaskItem title = {taskTitle[1].title} dueDate = {taskTitle[1].dueDate}></TaskItem>
      <TaskItem title = {taskTitle[2].title} dueDate = {taskTitle[2].dueDate}></TaskItem>
    </div>
  );
}
// title = 'Title' dueDate = 'Date'
export default App;
