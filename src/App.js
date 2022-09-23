import { useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import mockData from './data/mockData';

function App() {
  const [listData, setListData] = useState(mockData);
  return (
    <div className='container my-3'>
      <Header />
      <TasksList tasksListData={listData} />
    </div>
  );
}

export default App;
