import React from "react";
import VacancyList from "./VacancyList";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


interface job {
  organization_name: string;
  postion: string;
  salary: string;
  price_From: number;
  price_to: number;
  type: string;
  city: string;
  currency: string;


}

const Vacancy = () => {

const nav = useNavigate();
  const {data, loading} = useFetch();

  console.log(loading)

  if (loading) {
    return <div>loading...</div>
  }

 
return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vacancy--btn">
            <button>Добавить вакансию</button>
          </div>
           {
            data.map((job: job, index: number) => (
              <VacancyList
              key={index}
              companyName={job.organization_name}
              jobTitle={job.postion}
              paymentType={job.salary}
              priceForm={job.price_From}
              priceTo={job.price_to}
              type={job.type}
              city={job.city}
              currency={job.currency}
              />
            ))
           }
          <div className="vacancy--btn2">
            <button>Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;