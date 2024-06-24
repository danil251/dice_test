import React from 'react';
import s from './Header.module.scss'
import LoginBtnGroup from "../../Molecules/LoginBtnGroup/LoginBtnGroup.jsx";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>Test Game</div>
            <LoginBtnGroup/>
        </div>
    );
};

export default Header;