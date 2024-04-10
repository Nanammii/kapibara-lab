import "./services.sass";

function Services({onClick}) {
  return (
    <section className="services container" id={'services'}>
      <h2 className="services__title">Лаборатория</h2>
      <div className="services__description">
        <p className="services__paragraph">Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными
          капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических исследованиях,
          генетической диагностике и многом другом. </p>
        <p className="services__paragraph">Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.</p>
      </div>
      <button className="services__button button" onClick={onClick}>Оставить заявку</button>
      <img className="services__image" src="../img/servises-photo.png" alt="Лаборатория"/>
    </section>
  );
}

export default Services;
