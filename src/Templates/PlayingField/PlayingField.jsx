import React, {useMemo, useRef} from 'react';
import s from './PlayingField.module.scss';
import DiceRoll from "../../Atoms/DiceRoll/DiceRoll.jsx";
import BetAmountSelect from "../../Atoms/BetAmountSelect/BetAmountSelect.jsx";
import BetBtnGroup from "../../Molecules/BetBtnGroup/BetBtnGroup.jsx";
import {useUserStore} from "../../store/UserStore.js";
import {useGamingStore} from "../../store/GamingStore.js";
import LoginModal from "../../Organisms/LoginModal/LoginModal.jsx";


const PlayingField = () => {
    const {user, modalLoginIsOpen} = useUserStore()
    const {activeMode, currentRollResult, endMessage } = useGamingStore()
    const diceRef = useRef()

    const title = useMemo(() => {
        if (!user) return <div>Войдите, чтобы продолжить</div>
        else if (user && !currentRollResult) return <div>Сделайте ставку</div>
        else if (activeMode && currentRollResult) return <div>
            <div className={s.title}>Результат броска кубика: {currentRollResult}</div>
            <div className={s.result}>{endMessage}</div>
        </div>
    }, [user, currentRollResult])
    return (
        <div className={s.container}>
            {!user && <div className={s.blur}/>}
            {modalLoginIsOpen && <LoginModal/>}
            <div className={s.wrapper}>
                <div className={s.titleWrapper}>
                    {title}
                </div>
                <DiceRoll diceRef={diceRef}/>
                <BetAmountSelect/>
                <BetBtnGroup diceRef={diceRef}/>
            </div>
        </div>
    );
};

export default PlayingField;