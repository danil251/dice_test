import React, {useState} from 'react';
import s from './SelectNumber.module.scss'
import clsx from "clsx";
import {useGamingStore} from "../../store/GamingStore.js";

const SelectNumber = ({onClick, active = false}) => {
    const {setSpecificNumber} = useGamingStore()
    const [state, setSate] = useState("Конкретное число")
    return (
        <div className={s.wrapper}>
            <select onClick={onClick} value={state} onChange={(val) => {
                setSate(val.target.value)
                setSpecificNumber(val.target.value)
            }} className={clsx({[s.select]: true, [s.active]: active})}>
                <option value="Конкретное число" disabled hidden>
                    Конкретное число
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <div className={clsx({[s.value]: true, [s.activeValue]: active})}>{state !== "Конкретное число"? state : 1}</div>
        </div>
    );
};

export default SelectNumber;