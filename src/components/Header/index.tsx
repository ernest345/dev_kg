import React from 'react';
import { FaArrowRightToBracket } from "react-icons/fa6";

const Header: React.FC = () => {
    return (
        <div id="header">
            <div className="container">
            <div className="main-header">
            <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="img" />
            <nav>
                <a href="#Вакансии">Вакансии</a>
                <a href="#Мероприятия">Мероприятия</a>
                <a href="#Видео">Видео</a>
                <a href="#Организация">Организация</a>
                <a href="#Сообщество">Сообщество</a>
            </nav>
            <div className="my-btn">
            <button className='icon-btn'><FaArrowRightToBracket /></button>
            <button className="login-button">Войти</button>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Header;

