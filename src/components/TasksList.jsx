import TaskItem from './TaskItem';

function TasksList({ tasksListData }) {
  return (
    <div className='tasksList'>
      <ul className='list-unstyled'>
        {tasksListData.map((item) => (
          <TaskItem key={item.id} taskItemData={item} />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
