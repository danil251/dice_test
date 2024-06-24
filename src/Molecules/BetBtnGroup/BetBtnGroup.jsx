import React from 'react';
import Btn from "../../Atoms/Btn/Btn.jsx";
import SelectNumber from "../../Atoms/SelectNumber/SelectNumber.jsx";
import s from './BetBtnGroup.module.scss'

import {useGamingStore} from "../../store/GamingStore.js";
import PlaceBetBtn from "../../Atoms/PlaceBetBtn/PlaceBetBtn.jsx";

const BetBtnGroup = ({diceRef}) => {
    const { activeMode, setActiveMod } = useGamingStore()
    const active = (num) => {
        return num === activeMode
    }
    return (
        <>
            <div className={s.title}>Варианты ставок</div>
            <div className={s.wrapper}>
                <Btn children={'Четное'} style={{width: '50%'}} onClick={() => setActiveMod(1)} active={active(1)}/>
                <Btn children={'Нечетное'} style={{width: '50%'}} onClick={() => setActiveMod(2)} active={active(2)}/>
                <Btn children={'От 1 до 3'} style={{width: '50%'}} onClick={() => setActiveMod(3)} active={active(3)}/>
                <Btn children={'От 4 до 6'} style={{width: '50%'}} onClick={() => setActiveMod(4)} active={active(4)}/>
            </div>
            <SelectNumber onClick={() => setActiveMod(5)} active={active(5)}/>
            <PlaceBetBtn diceRef={diceRef}/>
        </>
    );
};

export default BetBtnGroup;