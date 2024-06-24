import React, {useState} from 'react';
import s from "./BetAmountSelect.module.scss";
import Arrow from "../../assets/svg/Arrow.jsx";
import clsx from "clsx";
import {useGamingStore} from "../../store/GamingStore.js";

const BetAmountSelect = () => {
    const {setBetAmount} = useGamingStore()
    const [open, setOpen] = useState(false)
    return (
        <div className={s.wrapper} onChange={(e) => setBetAmount(e.target.value)}>
            <div className={s.title}>Размер ставки</div>
            <select className={s.select} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
                <option value="1">1.00</option>
                <option value="5">5.00</option>
                <option value="10">10.00</option>
                <option value="15">15.00</option>
                <option value="20">20.00</option>
            </select>
            <div className={clsx({[s.arrow]: true, [s.activeArrow]: open})}>
                <Arrow/>
            </div>
        </div>

    );
};

export default BetAmountSelect;