{
  type ToDo = {
    title: string;
    desc: string;
  }

  function display(todo: Readonly<ToDo>){
    todo.title = 'todolist' // 오류 발생
  }
}