import React from "react";

const Vacancy = () => {
  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vacancy--btn">
            <button>Добавить вакансию</button>
          </div>
          <div className="vacancy--job">
            <div className="vacancy--job__title">
              <div className="vacancy--job__title--com">
                <img
                  src="https://devkg.com/images/organizations/886e28d889f4c24ea73c66b80174110f.webp"
                  alt=""
                />
                <div className="">
                  <h4>Компания</h4>
                  <p>Validon Agency</p>
                </div>
              </div>
            </div>
            <div className="vacancy--job__title">
              <h4>Должность</h4>
              <p>Team Leader</p>
            </div>
            <div className="vacancy--job__title">
              <h4>Оклад</h4>
              <p>От 90000 RUB в месяц</p>
            </div>
            <div className="vacancy--job__title">
              <h4>Тип</h4>
              <p>Удаленная работа</p>
            </div>
          </div>
          <div className="vacancy--job">
            <div className="vacancy--job__title">
              <div className="vacancy--job__title--com">
                <img
                  src="https://devkg.com/images/organizations/5a789fb32d0be7c268826a3e2e6a9c6a.webp"
                  alt=""
                />
                <div className="">
                  <h4>Компания</h4>
                  <p>Tomorrow-Tech</p>
                </div>
              </div>
            </div>
            <div className="vacancy--job__title">
              <h4>Должность</h4>
              <p>Стажер Ux Ui</p>
            </div>
            <div className="vacancy--job__title">
              <h4>Оклад</h4>
              <p>Неоплачиваемая/мес</p>
            </div>
            <div className="vacancy--job__title">
              <h4>Тип</h4>
              <p>Стажировка/офис</p>
            </div>
          </div>
          <div className="vacancy--btn2">
            <button>Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
