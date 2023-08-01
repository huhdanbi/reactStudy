
import { useState } from "react";
import Header from '../components/layout/Header'
import InputItem from '../components/blocks/InputItem'
import TodoList2 from '../components/blocks/TodoList2'

const Sub = () => {
  const [inputData, updateData] = useState('');
  const [dataList, updateList] = useState([]);
  const [isUpdate, isUpdateState] = useState(false);
  const [selectIdx, updateIdx] = useState(null);

  const onChange = (val) => {
    updateData(val.target.value);
  }

  const onClick = () => {
    updateList([...dataList, {name: inputData}]);
    updateData('');
  }

  const updateSate = () => {
    isUpdateState(true);
  }

  const onUpdate = () => {
    isUpdateState(false);
    updateData('');
    dataList[selectIdx].name = inputData;
  }
  const inputItem = { value: inputData, inputData, isUpdate, onChange, onClick, updateSate, onUpdate }

  const deleteItem = (idx) => {
    dataList.splice(idx, 1);
    updateList([...dataList])
  }
  const updateItem = (idx) => { 
    updateData(dataList[idx].name);
    updateIdx(idx);
    updateSate();
  }
  const todoList = { dataList, deleteItem, updateItem}

  return (
      <div>
        <Header className="App-header" />
        <InputItem {...inputItem} />
        
        <TodoList2 {...todoList} />
      </div>
    );
}

export default Sub;