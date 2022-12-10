import { useState } from 'react';
import Button from './Button';
import Priority from './Priority';

function TaskForm({ handleAdd }) {
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(
    'Description must be at least 5 characters'
  );

  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState('High');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = e => {
    if (description.length <= 5) {
      setBtnDisabled(true);
      setMessage('Text must be at least 5 characters');
    } else {
      setBtnDisabled(false);
      setMessage('');
    }
    setDescription(e.target.value);
  };

  const handleSelectChange = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      description,
      category,
      priority,
    };
    handleAdd(newTask);
    setDescription('');
  };

  return (
    <form className='mb-4' onSubmit={handleSubmit}>
      <input
        className='form-control mb-3'
        type='text'
        placeholder='Enter task description'
        onChange={handleTextChange}
        value={description}
      />
      <p className='text-secondary'>{message}</p>
      <select
        className='form-select mb-3'
        onChange={handleSelectChange}
        value={category}
      >
        <option value='Work'>Work</option>
        <option value='Personal'>Personal</option>
        <option value='Family'>Family</option>
      </select>
      <Priority selectPriority={priority => setPriority(priority)} />
      <Button type='submit' variant='primary' isDisabled={btnDisabled}>
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;
