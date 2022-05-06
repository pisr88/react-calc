import React, { useEffect, useState } from "react";
import style from './buttons.module.css'

const Buttons = (props) => {
const keyDownHandler = (e) => {
    let btn = e.target.innerText
    props.onClick(btn)
}


    return (
        <div className={style.buttonsBox}>
            <div onClick={keyDownHandler} className={style.button}>%</div>
            <div onClick={keyDownHandler} className={style.button}>+/-</div>
            <div onClick={keyDownHandler} className={style.button}>C</div>
            <div onClick={keyDownHandler} className={style.button}>/</div>
            <div onClick={keyDownHandler} className={style.button}>7</div>
            <div onClick={keyDownHandler} className={style.button}>8</div>
            <div onClick={keyDownHandler} className={style.button}>9</div>
            <div onClick={keyDownHandler} className={style.button}>x</div>
            <div onClick={keyDownHandler} className={style.button}>4</div>
            <div onClick={keyDownHandler} className={style.button}>5</div>
            <div onClick={keyDownHandler} className={style.button}>6</div>
            <div onClick={keyDownHandler} className={style.button}>-</div>
            <div onClick={keyDownHandler} className={style.button}>1</div>
            <div onClick={keyDownHandler} className={style.button}>2</div>
            <div onClick={keyDownHandler} className={style.button}>3</div>
            <div onClick={keyDownHandler} className={style.button}>+</div>
            <div onClick={keyDownHandler} className={style.button}>0</div>
            <div onClick={keyDownHandler} className={style.button}>,</div>
            <div onClick={keyDownHandler} className={style.button}>=</div>
        </div>
    )
}


export default Buttons;