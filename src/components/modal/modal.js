import "./modal.sass";

function Modal({onModalClose}) {
  return (
    <div className="modal" onClick={onModalClose}>
      <div className="modal__wrapper">
        <img className="modal__icon" src="../img/checkmark-circle.svg" alt="Заявка подана"/>
        <p className="modal__description">Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее
          время.</p>
      </div>
    </div>
  );
}

export default Modal;
