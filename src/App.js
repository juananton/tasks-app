import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import TasksList from './components/TasksList';
import mockData from './data/mockData';
import TaskForm from './components/TaskForm';

function App() {
  const [listData, setListData] = useState(mockData);
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setListData([newTask, ...listData]);
  };
  const deleteTaskItem = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setListData(listData.filter((item) => item.id !== id));
    }
  };

  return (
    <div className='container my-3'>
      <Header />
      <TaskForm handleAdd={addTask} />
      <Counter tasksListData={listData} />
      <TasksList tasksListData={listData} handleDelete={deleteTaskItem} />
    </div>
  );
}

export default App;
