import React from "react";
import style from './buttons.module.css'

const Buttons = (params) => {
    return (
        <div className={style.buttonsBox}>
            <div  className={style.button}>%</div>
            <div  className={style.button}>+/-</div>
            <div  className={style.button}>C</div>
            <div  className={style.button}>/</div>
            <div  className={style.button}>7</div>
            <div  className={style.button}>8</div>
            <div  className={style.button}>9</div>
            <div  className={style.button}>x</div>
            <div  className={style.button}>4</div>
            <div  className={style.button}>5</div>
            <div  className={style.button}>6</div>
            <div  className={style.button}>-</div>
            <div  className={style.button}>1</div>
            <div  className={style.button}>2</div>
            <div  className={style.button}>3</div>
            <div  className={style.button}>+</div>
            <div  className={style.button}>0</div>
            <div  className={style.button}>,</div>
            <div  className={style.button}>=</div>
        </div>
    )
}


export default Buttons;