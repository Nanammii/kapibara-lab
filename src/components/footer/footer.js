import "./footer.sass";

function Footer(props) {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <a className="footer__logo" href="#">
          <img className="footer__logo-image" src="./img/logo-footer.svg" alt="Логотип сайта" width="150" height="23"/>
        </a>
        <p className="footer__copyright">Все права защищены Российской Ассоциацией Капибар</p>
      </div>
    </footer>
  );
}

export default Footer;
