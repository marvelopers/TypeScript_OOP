{
  type ToDo = {
    title: string;
    desc: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo:ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {...todo, ...fieldsToUpdate}
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    desc: 'about TypeScript',
    label: 'ts',
    priority: 'high',
  }
  console.log(todo)
  
  const updated = updateTodo(todo, {priority:'low'});
  console.log(updated)

}