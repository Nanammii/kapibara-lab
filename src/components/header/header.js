import "./header.sass";

function Header(props) {


  return (
    <header className="header container">
      <div className="header__container">
        <a className="header__link" href="#">
          <img className="header__logo" src="../img/logo.svg" alt="Логотип сайта" width="194" height="29"/>
          <span className="header__logo-text">Современные методики диагностики</span>
        </a>
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <a className="header__navigation-link" href="#services" >Лаборатория</a>
          </li>
          <li className="header__navigation-item">
            <a className="header__navigation-link" href="#gallery" >Галерея</a>
          </li>
          <li className="header__navigation-item">
            <a className="header__navigation-link" href="#application">Оставить заявку</a>
          </li>
        </ul>
        <a className="header__phone" href="#">
          <img className="header__icon-phone" src="../img/phone-icon.svg" alt="Наш телефон" />
          <div className="header__phone-wrapper">
            <span className="header__phone-number">+7 123 456 7890</span>
            <span className="header__phone-text">Звонок бесплатный</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
