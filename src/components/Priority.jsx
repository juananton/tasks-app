import { useState } from 'react';

function Priority({ selectPriority }) {
  const [selectedPriority, setSelectedPriority] = useState('High');
  const handleChange = (e) => {
    setSelectedPriority(e.currentTarget.value);
    selectPriority(e.currentTarget.value);
  };
  return (
    <div className='mb-4 d-flex w-50 justify-content-between'>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          checked={selectedPriority === 'High'}
          id='num1'
          name='priority'
          value='High'
          onChange={handleChange}
        />
        <label className='form-check-label' htmlFor='num1'>
          High
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          checked={selectedPriority === 'Medium'}
          id='num2'
          name='priority'
          value='Medium'
          onChange={handleChange}
        />
        <label className='form-check-label' htmlFor='num2'>
          Medium
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          checked={selectedPriority === 'Low'}
          id='num3'
          name='priority'
          value='Low'
          onChange={handleChange}
        />
        <label className='form-check-label' htmlFor='num3'>
          Low
        </label>
      </div>
    </div>
  );
}

export default Priority;
