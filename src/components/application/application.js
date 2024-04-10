import "./application.sass";
import {useState, forwardRef} from "react";

function Application(props, ref) {
  const [valueInputs, setValueInput] = useState({
    surname: 'Мальцев',
    name: '',
    patronymic: ''
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    console.log(valueInputs);
    props.onOpenModal();
  };

  return (
    <section className="application container" id={"application"} ref={ref}>
      <div className="application__wrapper">
        <h2 className="application__title">Заявка <br/> на диагностику</h2>
        <p className="application__description">Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>
        <form className="application__form" onSubmit={handleFormSubmit}>
          <fieldset className="application__form-group">
            <input
              className="application__form-input"
              value={valueInputs.surname}
              onChange={(evt) =>
                setValueInput({...valueInputs, surname: evt.target.value})}
              placeholder="Фамилия"
              required
            />
            <input
              className="application__form-input"
              value={valueInputs.name}
              onChange={(evt) =>
                setValueInput({...valueInputs, name: evt.target.value})}
              placeholder="Имя"
              required
            />
            <input
              className="application__form-input"
              value={valueInputs.patronymic}
              onChange={(evt) =>
                setValueInput({...valueInputs, patronymic: evt.target.value})}
              placeholder="Отчество"
              required
            />
          </fieldset>
          <button className="application__button button">Отправить</button>
        </form>
      </div>
    </section>
  );
}

export default forwardRef(Application);
