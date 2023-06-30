const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}

Button.defaultProps = {
    name : '확인',
    onClick: () => {
    }
}

export default Button;