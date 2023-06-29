import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const menuArr = [
        {
            name: '메인',
            linkTo : '/'
        },
        {
            name: '서브',
            linkTo : '/sub'
        },
    ];

    const [isMenuOpend, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(val => !val)
    }

    return (
        <div>
            { !isMenuOpend ?
                <button onClick={toggleMenu}>열기</button>
            : 
                <div onClick={toggleMenu}>
                    <button>닫기</button>
                    <ul>
                        {menuArr.map( (item, i) => 
                            <li key={i}>
                                <Link to={item.linkTo} key={i}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Menu;