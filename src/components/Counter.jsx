function Counter({ tasksListData }) {
  if (tasksListData.length > 1 || tasksListData.length === 0) {
    return <p>{tasksListData.length} tasks left</p>;
  } else {
    return <p>{tasksListData.length} task left</p>;
  }
}

export default Counter;
