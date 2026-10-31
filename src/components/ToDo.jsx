import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import TodoInfo from './TodoInfo';
import TodoList from './TodoList';

const ToDo = () => {
  const tasks = [
    { id: 1, title: 'Погладить кота', isDone: false },
    { id: 2, title: 'Приготовить обед', isDone: true },
    { id: 3, title: 'Сделать домашку', isDone: false },
  ];

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo 
      totalTasks={tasks.length}
      doneTasks={tasks.filter(({isDone}) => isDone).length}
      />
      <TodoList tasks={tasks}   />
    </div>
  );
};

export default ToDo;
