import { useState } from 'react';
import Button from '../common/Button'
import DftInput from '../common/DftInput'

const DftForm = (props) => {
    const [txt, updateTxt] = useState('');

    const onChange = (val) => {
        updateTxt(val);
        props.onChangeTxt(txt);
    }

    const onClickEvent = () => {
        props.getTxt(txt);
    }

    return (
        <div>
            <DftInput onChange={onChange} />
            <Button name="확인" onClick={onClickEvent} />
        </div>
    )
}

export default DftForm;