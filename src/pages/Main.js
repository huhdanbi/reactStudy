import { useEffect, useState } from "react";
import Header from '../components/layout/Header'
import SearchForm from '../components/blocks/SearchForm'
import logo from '../logo.svg';

const Main = () => {
    const [ txt, updateTxt ] = useState('');
    const [ resTxt, updateResTxt ] = useState('');

    const resultText = (val) => {
        updateResTxt(val);
    }

    const test = (val) => {
        updateTxt(val)
    }

    useEffect(() => {
        updateResTxt('');
    }, [txt]);

    return (
        <div>
            <Header className="App-header" />
            <img src={logo} className="App-logo" alt="logo" />

            <SearchForm getTxt={resultText} onChangeTxt={test} />
            { resTxt && <span>결과 : {resTxt}</span> }
        </div>
    )
}

export default Main;