import React from "react";
import imgVideo from "../../assets/images/img.webp"
function Videoo() {
  return (
    <div id="video">
    <div className="container">
      <div className="btn">
        <button>Добавить видео</button>
      </div>
      <div className="text">
        <h1> Все видео </h1>
        </div>
      <div className="video">
        <div className="video--img">
          <img src={imgVideo} alt="img" />
            </div>
          <div className="video--text--img1">
           <h1>
            ChatGPT - <br />
            ревалюция или <br />
            мода? как нейросети <br />
            могут помочь в <br />
            работе 
            </h1> 
          </div>
      
      </div>
    </div>
    </div>
  );
}

export default Videoo;
