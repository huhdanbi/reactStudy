
import { useState } from "react";
import Header from '../components/layout/Header'
import InputItem from '../components/blocks/InputItem'

const Sub = () => {
  const [inputData, updateData] = useState('');
  const [dataList, updateList] = useState([{name: ''}]);

  const onChange = (val) => {
    updateData(val.target.value);
  }

  const onClick = () => {
    updateList([...dataList, {name: inputData}]);
  }

  return (
      <div>
        <Header className="App-header" />
        <InputItem onChange={onChange} onClick={onClick} name={inputData} />
        { dataList.map((each, i) => <p key={i}>{each.name}</p> ) }
      </div>
    );
}

export default Sub;