const Todo = (props) => {
    return (
        <ul>
        { props.dataList.map((each, i) =>
          <li key={i}>
            {each.name}
            <button onClick={() => {props.updateItem(i)}} >수정</button>
            <button onClick={() => {props.deleteItem(i)}} >삭제</button>
          </li> ) }
      </ul>
    )
}

export default Todo;