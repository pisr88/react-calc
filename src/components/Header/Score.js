import React from "react";
import style from './Score.module.css'

const Score = (props) => {
    return <div className={style.scoreBox}>{props.value.value}</div>;
}

export default Score;
