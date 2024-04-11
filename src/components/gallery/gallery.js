import "./gallery.sass";

function Gallery(props) {
  return (
    <section className="gallery container" id={"gallery"}>
      <h2 className="gallery__title">Галерея</h2>
      <ul className="gallery__list">
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-01.png" alt="Фото 1" />
        </li>
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-02.png" alt="Фото 2" />
        </li>
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-03.png" alt="Фото 3" />
        </li>
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-04.png" alt="Фото 4" />
        </li>
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-05.png" alt="Фото 5" />
        </li>
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-06.png" alt="Фото 6" />
        </li>
        <li className="gallery__item">
          <img className="gallery__image" src="./img/gallery-photo-07.png" alt="Фото 7" />
        </li>
      </ul>
    </section>
  );
}

export default Gallery;
