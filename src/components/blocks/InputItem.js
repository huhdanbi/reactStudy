import Button from '../common/Button'

const TodoItem = (props) => {

    return (
        <div>
            <input type="text" name="name" onChange={props.onChange} value={props.value} />
            {
                !props.isUpdate ? 
                <Button name="확인" onClick={props.onClick} />
                : <Button name="수정하기" onClick={props.onUpdate} /> 
            }
        </div>
    )
}

export default TodoItem;