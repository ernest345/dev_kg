import React from 'react';

interface LoginModalProps {
    show: boolean;
    handleClose: () => void;
}

const ModalLogin: React.FC<LoginModalProps> = ({ show, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close" onClick={handleClose}>Закрыть</button>

                <div className="modal-text">
                    <h1>Войти через Telegram:</h1>
                    <button className='btn'>Войти через Telegram</button>
                </div>

                <div className="image">
                    <img src="https://devkg.com/js/img/not-found-jobs.f847c90.svg" alt="img" width={270}/>
                </div>

                <h2>*Если в вашей стране заблокирован телеграм, используйте VPN</h2>
                
            </div>


         </div>
    );
};

export default ModalLogin;
