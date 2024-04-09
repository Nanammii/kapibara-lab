import "./header.sass";
function Header(props) {
  return (
    <header className="header container">
      <div className="header__container">
        <a className="header__link" href={"#"}>
          <img className="header__logo" src="../img/logo.svg" alt="Логотип сайта"/>
          <span>Современные методики диагностики</span>
        </a>
        <a>
          <img className="header" src="../img/phone-icon.svg" alt="Наш телефон" />
        </a>
      </div>
    </header>
  );
}

export default Header;
