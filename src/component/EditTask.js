function newTask(title, dueDate) {
    const tempTask = {}
    let title1 = prompt('New Task');
    let date1 = prompt('Due Date');
    tempTask['title'] = title1
    tempTask['date'] = date1
    taskTitle.push(tempTask);
    console.log(tempTask);
    console.log(taskTitle)
    return (taskTitle)
  }