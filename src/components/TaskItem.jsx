import { FaTimes } from 'react-icons/fa';
function TaskItem({ taskItemData, handleDelete }) {
  return (
    <li className='task-item mb-3 d-flex justify-content-between align-items-start bg-light p-3 rounded'>
      <div className='item-content'>
        <h4>{taskItemData.description}</h4>
        <div className='badge bg-secondary'>{taskItemData.category}</div>
      </div>
      <div className='options'>
        <button className='btn' onClick={() => handleDelete(taskItemData.id)}>
          <FaTimes />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
