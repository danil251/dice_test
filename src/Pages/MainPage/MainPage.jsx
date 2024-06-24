import React, {useEffect} from 'react';
import Header from "../../Organisms/Header/Header.jsx";
import PlayingField from "../../Templates/PlayingField/PlayingField.jsx";
import {useUserStore} from "../../store/UserStore.js";

const MainPage = () => {
    const {fetchUser} = useUserStore()
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <>
            <Header/>
            <PlayingField/>
        </>
    );
};

export default MainPage;