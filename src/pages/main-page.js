import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Services from "../components/services/services";
import Gallery from "../components/gallery/gallery";
import Application from "../components/application/application";
import Footer from "../components/footer/footer";
import Modal from "../components/modal/modal";
import {useRef, useState} from "react";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalCLose = () => {
    setIsModalOpen(false);
  }

  const handleScrollClick = () => {
    console.log(ref)
    ref.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Intro/>
        <Services onClick={handleScrollClick} />
        <Gallery />
        <Application onOpenModal={handleModalOpen} ref={ref} />
      </main>
      <Footer />
      {isModalOpen && <Modal onModalClose={handleModalCLose} />}
    </div>
  );
}

export default MainPage;
