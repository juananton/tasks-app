import { BsXLg } from 'react-icons/bs';
function TaskItem({ taskItemData, handleDelete, badgeColor }) {
  return (
    <li className='task-item mb-3 d-flex justify-content-between align-items-start bg-light p-3 rounded'>
      <div className='item-content'>
        <h5>{taskItemData.description}</h5>
        <div className='badge bg-secondary me-2'>{taskItemData.category}</div>
        <div className={`badge text-bg-${badgeColor}`}>
          {taskItemData.priority}
        </div>
      </div>
      <div className='options'>
        <button className='btn' onClick={() => handleDelete(taskItemData.id)}>
          <BsXLg />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
