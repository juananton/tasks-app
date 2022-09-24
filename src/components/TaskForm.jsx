import { useState } from 'react';
import Button from './Button';

function TaskForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleTextChange = (e) => {
    if (text.length >= 10) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    }
    setText(e.target.value);
  };
  const [category, setCategory] = useState('');
  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form className='mb-4'>
      <input
        className='form-control mb-3'
        type='text'
        placeholder='Enter task description'
        onChange={handleTextChange}
        value={text}
      />
      <p>{message}</p>
      <select
        className='form-select mb-3'
        onChange={handleSelectChange}
        value={category}
      >
        <option value='Work'>Work</option>
        <option value='Personal'>Personal</option>
        <option value='Family'>Family</option>
      </select>
      <Button type='submit' variant='primary' isDisabled={btnDisabled}>
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;
