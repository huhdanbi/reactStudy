const Todo = (props) => {
    return (
        <ul>
        {
            props.items.map((item, i) => (
                <li key={i}>
                    <span>{item.name}</span>
                    <span>{item.nickName}</span>
                    <button onClick={() => props.getUpdate(i)}>수정</button>
                    <button onClick={() => props.onRemove(i)}>삭제</button>
                </li>
            ))
        }
        </ul>
    )
}

export default Todo;