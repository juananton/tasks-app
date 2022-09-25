import TaskItem from './TaskItem';
function TasksList({ tasksListData, handleDelete }) {
  const badge = (item) => {
    if (item.priority === 'High') {
      return 'danger';
    } else if (item.priority === 'Medium') {
      return 'warning';
    } else {
      return 'success';
    }
  };

  return (
    <div className='tasksList'>
      <ul className='list-unstyled'>
        {tasksListData.map((item) => (
          <TaskItem
            key={item.id}
            taskItemData={item}
            handleDelete={handleDelete}
            badgeColor={badge(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
