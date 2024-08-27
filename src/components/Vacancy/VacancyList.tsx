import { useNavigate } from "react-router-dom";



const VacancyList = ({
  companyName = 'string',
  jobTitle = 'string',
  paymentType = 'string',
  priceForm = 0,
  priceTo = 0,
  type = 'string',
  city = 'string',
  currency = 'string',
}: {
  companyName?: string;
  jobTitle?: string;
  paymentType?: string;
  priceForm?: number;
  priceTo?: number;
  type?: string;
  city?: string;
  currency?: string;
}) => {
  const nav = useNavigate();
   
  const salary = 
  priceForm > 0 || priceTo > 0
   ? `${priceForm}-${priceTo} ${currency} (${paymentType})`
   : "Зарплата не указана";
  return (
      
<div className="vacancy--job" onClick={() => nav("/detailVacancy")}>
        <div className="vacancy--job__title">
          <div className="vacancy--job__title--com">
            <img
              src="https://devkg.com/images/organizations/886e28d889f4c24ea73c66b80174110f.webp"
              alt={companyName}
            />
            <div className="" onClick={() => nav("/detailVacancy")}>
              <span className="label">Компания</span>
              <p>{companyName}</p>
            </div>
          </div>
        </div>
        <div
          className="vacancy--job__title"
          onClick={() => nav("/detailVacancy")}
        >
          <span className="label">Должность</span>
          <p>{jobTitle}</p>
        </div>
        <div
          className="vacancy--job__title"
          onClick={() => nav("/detailVacancy")}
        >
          <span className="label">Оклад</span>
          <p>{`${priceForm}-${priceTo} В ${paymentType}`}</p>
        </div>
        <div
          className="vacancy--job__title"
          onClick={() => nav("/detailVacancy")}
        >
          <span>Тип</span>
          <p>{ `${type}/${city}`}</p>
        </div>
      </div>
  );
};


export default VacancyList;
