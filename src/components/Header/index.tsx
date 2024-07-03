// import React from 'react';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Header: React.FC = () => {
//     return (
//         <div id="header">
//             <div className="container">
//             <div className="main-header">
//             <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="img" />
//             <nav>
//                 <a href="#Вакансии">Вакансии</a>
//                 <a href="#Мероприятия">Мероприятия</a>
//                 <a href="#Видео">Видео</a>
//                 <a href="#Организация">Организация</a>
//                 <a href="#Сообщество">Сообщество</a>
//             </nav>

            

//             <div className="my-btn">
//             <div className="menu">
//                 <a
//                 ><GiHamburgerMenu /></a>
//             </div>
//             <button className='icon-btn'><FaArrowRightToBracket /></button>
//             <button className="login-button">Войти</button>
//             </div>
//         </div>
//             </div>
//         </div>
//     );
// };

// export default Header;

// Header.tsx
import React, { useState } from 'react';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from '../Modal';

const Header: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

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
                        <div className="menu" onClick={openModal}>
                            <GiHamburgerMenu />
                        </div>
                        <button className='icon-btn'><FaArrowRightToBracket /></button>
                        <button className="login-button">Войти</button>
                    </div>
                </div>
            </div>
            <Modal show={modalVisible} handleClose={closeModal} />
        </div>
    );
};

export default Header;
