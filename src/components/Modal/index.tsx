import React from 'react';

interface ModalProps {
    show: boolean;
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="img" />
                <nav>
                    <a href="#Вакансии">Вакансии</a>
                    <a href="#Мероприятия">Мероприятия</a>
                    <a href="#Видео">Видео</a>
                    <a href="#Организация">Организация</a>
                    <a href="#Сообщество">Сообщество</a>
                </nav>
            </div>
        </div>
    );
};

export default Modal;
