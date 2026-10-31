const TodoInfo = (props) => {
  const {
    totalTasks ,
    doneTasks ,
  } = props

  const hasTasks = totalTasks > 0;
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {doneTasks} of {totalTasks}
      </div>
      {hasTasks && (
        <button className="todo__delete-all-button" type="button">
          Delete all
        </button>
      )}
    </div>
  );
};
export default TodoInfo;