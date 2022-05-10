import React, { useEffect } from "react";
import style from './Operation.module.css';

const Operation = (props) => {
    return (
      <div style={{minHeight: '28px'}}>{props.operation.value.previousOperation} {props.operation.value.operation}</div>
   );
}

export default Operation;   
