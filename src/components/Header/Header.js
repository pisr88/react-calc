import React from 'react';
import Operation from './Operation';
import Score from './Score';
import style from './Header.module.css';

function Header (props) {
    return (
    <div className={style.header}>
        <Operation operation={props}/>
        <Score score={props}/>
    </div>
    );
}

export default Header;