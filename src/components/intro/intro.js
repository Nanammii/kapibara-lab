import React from 'react';
import "./intro.sass";

function Intro() {
  return (
    <div className="intro">
      <h1 className="intro__title">
        <span className="intro__title-text">точные результаты</span>
        <span className="intro__title-text intro__title-text--second">точно в срок</span>
      </h1>

      <p className="intro__description container">Добро пожаловать <br/> в медицинскую лабораторию KapibaraLab, где работают
        исключительно капибары — <br/> ваш надежный партнер в обеспечении качественной <br/> и точной диагностики!</p>

    </div>
  );
}

export default Intro;
