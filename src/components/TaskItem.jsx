import Card from './shared/Card';
function TaskItem({ taskItemData }) {
  return (
    <li className='mb-3'>
      <Card>
        <h4>{taskItemData.description}</h4>
        <div className='badge bg-secondary'>{taskItemData.category}</div>
      </Card>
    </li>
  );
}

export default TaskItem;
