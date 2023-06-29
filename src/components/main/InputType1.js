import { useState } from "react";

const InputType1 = () => {
    // const [txt, setTxt] = useState('');
    // const [resultTxt, setResultTxt] = useState(txt);
    const [txt, setTxt] = useState([{msg: '', subMsg: ''}]);

    const deleteInput = () => {
        alert('delete')
    }

    const onChangeHandler = (e) => {
        setTxt()
    }

    const addInput = (e) => {
        setTxt([
            ...txt,
            {msg: '', subMsg: ''},
        ])
    }

    return (
        <div>
            <button onClick={addInput}>필드 추가</button>

            <ul>
                {txt.map( (item, i) => (
                    <li key={i}>
                        <input type="text" name="msg" onChange={onChangeHandler} value={item.msg || ''} />
                        <input type="text" name="subMsg" onChange={onChangeHandler} value={item.subMsg || ''} />
                        <button onClick={deleteInput}>삭제 {item.msg}</button>
                    </li>
                ))}
                
            </ul>

            <button>확인</button>
            {/* <span>
                결과: {resultTxt}
            </span> */}
        </div>
    )
}

export default InputType1;