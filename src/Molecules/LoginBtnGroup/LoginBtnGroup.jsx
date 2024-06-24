import React from 'react';
import s from "./LoginBtnGroup.module.scss";
import Btn from "../../Atoms/Btn/Btn.jsx";
import {useUserStore} from "../../store/UserStore.js";
import {useGamingStore} from "../../store/GamingStore.js";

const LoginBtnGroup = () => {
    const {user, setModalLoginIsOpen} = useUserStore()
    const {balance} = useGamingStore()
    console.log(user)
    return (
        <>
            {!user ? <div className={s.wrapper}>
                <Btn children={'Войти'} onClick={() => setModalLoginIsOpen(true)}/>
                <Btn children={'Регистрация'} onClick={() => setModalLoginIsOpen(true)}/>
            </div> : <div className={s.score}>{balance} (TND)</div>}
        </>
    );
};

export default LoginBtnGroup;