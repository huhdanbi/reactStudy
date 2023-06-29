import { useState } from "react";

const DftInput = (props) => {
    const [txt, setTxt] = useState('');

    const onChange = (e) => {
        const txt = e.target.value;
        setTxt(txt);
        props.onChange(txt);
    }

    return (
        <input type="text" name="msg" onChange={onChange} value={txt} />
    )
}

export default DftInput;