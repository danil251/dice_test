import React from 'react';
import s from '../Btn/Btn.module.scss'
import {useGamingStore} from "../../store/GamingStore.js";
import {useUserStore} from "../../store/UserStore.js";

const PlaceBetBtn = ({diceRef}) => {
        const {
            setCurrentRollResult, setBalance, balance, activeMode, betAmount, specificNumber, setEndMessage
        } = useGamingStore()
        const {user} = useUserStore()
        const changeBalance = (res) => {
            const increase = (num = 2) => {
                setBalance(balance + (betAmount * num))
                setEndMessage(`Вы выиграли ${betAmount * num} TND!`)
            }
            const decrease = () => {
                setBalance(balance - betAmount)
                setEndMessage('Повезет в следующий раз!')
            }
            if (activeMode === 1) {
                if (res % 2 === 0) increase()
                else decrease()
            } else if (activeMode === 2) {
                if (res % 2 !== 0) increase()
                else decrease()
            } else if (activeMode === 3) {
                if (res === 1 || res === 2 || res === 3) increase()
                else decrease()
            } else if (activeMode === 4) {
                if (res === 4 || res === 5 || res === 6) increase()
                else decrease()
            } else if (activeMode === 5) {
                if (res === +specificNumber) increase(3)
                else decrease()
            }
        }

        const roll = () => {
            const res = Math.floor(Math.random() * 6) + 1
            setTimeout(() => {
                setCurrentRollResult(res)
                changeBalance(res)
            }, 1000)
            diceRef.current.rollDice(res)
        }

        return (
            <button disabled={!user || !activeMode || betAmount > balance} className={`${s.btn} ${s.green}`} onClick={roll}>
                Сделать ставку
            </button>
        );
    }
;

export default PlaceBetBtn;