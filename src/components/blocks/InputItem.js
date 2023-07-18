import Button from '../common/Button'

const TodoItem = (props) => {

    return (
        <div>
            <input type="text" name="name" onChange={props.onChange} value={props.name} />
            <Button name="확인" onClick={props.onClick} /> 
        </div>
    )
}

export default TodoItem;