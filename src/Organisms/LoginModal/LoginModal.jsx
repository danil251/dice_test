import React, {useState} from 'react';
import s from './LoginModal.module.scss'
import InputLogin from "../../Atoms/InputLogin/InputLogin.jsx";
import Btn from "../../Atoms/Btn/Btn.jsx";
import Close from "../../assets/svg/Close.jsx";
import {useUserStore} from "../../store/UserStore.js";

const LoginModal = () => {
    const {setModalLoginIsOpen, fetchUser} = useUserStore()
    const [login, setLogin] = useState('test_player_try')
    const [password, setPassword] = useState('test_player_try')
    const [errorLogin, setErrorLogin] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const loginHandler = () => {
        if (!login) setErrorLogin('Введите логин')
        if (!password) setErrorPassword('Введите пароль')
        else {
            setErrorPassword('')
            setErrorLogin('')
            fetch('https://api.lettobet.dev.bet4skill.com/api/client-login', {
                credentials: "include",
                method: 'POST',
                body: JSON.stringify({"login": login, "password": password}),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(r => {
                if (r.status === 400) setErrorPassword('Неверный логин/пароль')
                else if (r.status === 200) {
                    setModalLoginIsOpen(false)
                    fetchUser()
                }
            }).catch((e) => {

            })
        }
    }

    return (
        <div className={s.container} onClick={() => setModalLoginIsOpen(false)}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <div className={s.close} onClick={() => setModalLoginIsOpen(false)}>
                    <Close/>
                </div>
                <div className={s.wrapper}>
                    <InputLogin error={errorLogin} placeholder={'Login'} value={login} setValue={setLogin}/>
                    <InputLogin error={errorPassword} placeholder={'Password'} type={'password'} value={password}
                                setValue={setPassword}/>
                    <Btn children={'Войти'} onClick={loginHandler} style={{width: '100%', maxWidth: '100%'}}/>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;