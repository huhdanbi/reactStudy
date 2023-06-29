const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}

Button.defaultProps = {
    name : '확인',
    onClick: () => {
        console.log(2);
    }
}

export default Button;