import React from 'react';
import s from './InputLogin.module.scss'
import clsx from "clsx";

const InputLogin = ({placeholder, value, setValue, error, type = 'text'}) => {
    return (
        <div className={s.wrapper}>
            <input type={type} className={clsx({[s.input]: true, [s.errorInput]: error})} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
            {error && <div className={s.error}>{error}</div>}
        </div>
    );
};

export default InputLogin;