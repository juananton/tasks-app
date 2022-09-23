import TaskItem from './TaskItem';
function TasksList({ tasksListData, handleDelete }) {
  return (
    <div className='tasksList'>
      <ul className='list-unstyled'>
        {tasksListData.map((item) => (
          <TaskItem
            key={item.id}
            taskItemData={item}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
