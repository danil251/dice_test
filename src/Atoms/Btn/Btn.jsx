import React from 'react';
import s from "./Btn.module.scss";
import clsx from "clsx";

const Btn = ({children, onClick, active = false, style}) => {
    return (
        <button onClick={onClick} style={style} className={clsx({[s.btn]: true, [s.active]: active, [s.hover]: !active})}>
            {children}
        </button>
    );
};

export default Btn;