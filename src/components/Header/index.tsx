import React, { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import ModalLogin from '../ModalLogin';

const Header: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const openLoginModal = () => setLoginModalVisible(true);
    const closeLoginModal = () => setLoginModalVisible(false);

  return (
    <div id="header">
      <div className="container">
        <div className="main-header">
          <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="img" />
          <nav>
            <NavLink to={"/вакансии"}>Вакансии</NavLink>
            <NavLink to={"/мероприятия"}>Мероприятия</NavLink>
            <NavLink to={"/видео"}>Видео</NavLink>
            <NavLink to={"/организация"}>Организация</NavLink>
            <NavLink to={"/сообщество"}>Сообщество</NavLink>
          </nav>


                    <div className="my-btn">
                        <div className="menu" onClick={openModal}>
                            <GiHamburgerMenu />
                        </div>
                        <button className='icon-btn'><FaArrowRightToBracket /></button>
                        <button className="login-button" onClick={openLoginModal}>Войти</button>
                    </div>
                </div>
            </div>
            <Modal show={modalVisible} handleClose={closeModal} />
            <ModalLogin show={loginModalVisible} handleClose={closeLoginModal} />
        </div>
    );
};

export default Header;
