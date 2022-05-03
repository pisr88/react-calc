import React, { useEffect, useState } from "react";
import style from './buttons.module.css'

const Buttons = (props) => {

    const [clickBtn, setClickBtn] = useState();

    const clickBtnHandler = (e) => {
        setClickBtn(e.target.innerHTML)
        console.log(clickBtn);
    }
    

    return (
        <div className={style.buttonsBox}>
            <div onClick={clickBtnHandler} className={style.button}>%</div>
            <div onClick={clickBtnHandler} className={style.button}>+/-</div>
            <div onClick={clickBtnHandler} className={style.button}>C</div>
            <div onClick={clickBtnHandler} className={style.button}>/</div>
            <div onClick={clickBtnHandler} className={style.button}>7</div>
            <div onClick={clickBtnHandler} className={style.button}>8</div>
            <div onClick={clickBtnHandler} className={style.button}>9</div>
            <div onClick={clickBtnHandler} className={style.button}>x</div>
            <div onClick={clickBtnHandler} className={style.button}>4</div>
            <div onClick={clickBtnHandler} className={style.button}>5</div>
            <div onClick={clickBtnHandler} className={style.button}>6</div>
            <div onClick={clickBtnHandler} className={style.button}>-</div>
            <div onClick={clickBtnHandler} className={style.button}>1</div>
            <div onClick={clickBtnHandler} className={style.button}>2</div>
            <div onClick={clickBtnHandler} className={style.button}>3</div>
            <div onClick={clickBtnHandler} className={style.button}>+</div>
            <div onClick={clickBtnHandler} className={style.button}>0</div>
            <div onClick={clickBtnHandler} className={style.button}>,</div>
            <div onClick={clickBtnHandler} className={style.button}>=</div>
        </div>
    )
}


export default Buttons;