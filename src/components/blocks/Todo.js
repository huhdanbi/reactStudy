import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = () => {
    const [selectIdx, updateIdx] = useState(null);
    const [items, updateItems] = useState([]);
    const [data, updateData] = useState({
        name: '',
        nickName: ''
    });
    const [isUpdate, setIsUpdate] = useState(false);

    const todoItems = {};
    todoItems.onChange = (e) => {
        updateData( {...data, [e.target.name]: e.target.value} )
    }

    todoItems.onClick = () => {
        updateItems([...items, data]);
        updateData({name:'', nickName:''});
    }

    todoItems.onUpdate = () => {
        items[selectIdx] = data;
        updateItems([...items]);
        updateData({name:'', nickName:''});
    }

    const listMethods = {};
    listMethods.getUpdate = (idx) => {
        updateData(items[idx]);
        setIsUpdate(true);
        updateIdx(idx)
    }

    listMethods.onRemove = (idx) => {
        items.splice(idx, 1);
        updateItems([...items]);
    }

    return (
        <div>
            <TodoItem {...todoItems} name={data.name} nickName={data.nickName} isUpdate={isUpdate} />
            {
                items.length < 1 ?
                  <p>내용이 없습니다.</p> 
                : <TodoList items={items} {...listMethods} />
            }
            
        </div>
    )
}

export default Todo;