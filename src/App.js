import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import TasksList from './components/TasksList';
import mockData from './data/mockData';

function App() {
  const [listData, setListData] = useState(mockData);
  const deleteTaskItem = (id) => {
    setListData(listData.filter((item) => item.id !== id));
  };

  return (
    <div className='container my-3'>
      <Header />
      <Counter tasksListData={listData} />
      <TasksList tasksListData={listData} handleDelete={deleteTaskItem} />
    </div>
  );
}

export default App;
