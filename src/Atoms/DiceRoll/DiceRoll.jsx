import React from 'react';
import oneDot from "../../assets/img/oneDot.png";
import twoDot from "../../assets/img/twoDot.png";
import threeDot from "../../assets/img/threeDot.png";
import fourDot from "../../assets/img/fourDot.png";
import fiveDot from "../../assets/img/fiveDot.png";
import sixDot from "../../assets/img/sixDot.png";
import Dice from "react-dice-roll";
import s from './DiceRoll.module.scss'

const DiceRoll = ({diceRef}) => {
    return (
        <div className={s.wrapper}>
            <Dice disabled size={100} faceBg={'white'} faces={[oneDot, twoDot, threeDot, fourDot, fiveDot, sixDot]} ref={diceRef}/>
        </div>
    );
};

export default DiceRoll;