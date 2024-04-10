import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Services from "../components/services/services";
import Gallery from "../components/gallery/gallery";
import Application from "../components/application/application";
import Footer from "../components/footer/footer";
import {useRef} from "react";

function MainPage() {

  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Intro/>
        <Services />
        <Gallery />
        <Application />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
