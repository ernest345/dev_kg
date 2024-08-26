import React from "react";
import { Link } from "react-router-dom";



function Events() {
  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        <Link to={"/detailMeropriatia"}>-
        <div className="events">
          <div className="events--foto">
          <img src="https://devkg.com/images/events/e975ab09a375897590241aaec11d51fa.png" data-v-17b3db24="img"/>
            <div className="events--foto__text">
              <h4>
                25 августа 2024 <span>17:00</span>
              </h4>
              <h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>

              <div className="events--foto__text--par">
                <div className="events--foto__text--par__kor1">
                  <h6>Организатор</h6>
                  <h2>InkubasiaLAB</h2>
                </div>
                <div className="events--foto__text--par__kor2">
                  <h6>Когда</h6>
                  <h2>Коворкинг-резорт ololoAkJol</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Events