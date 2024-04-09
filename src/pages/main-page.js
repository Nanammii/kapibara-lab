import Header from "../components/header/header";
import Intro from "../components/intro/intro";

function MainPage() {
    return (
        <div className="page">
            <Header />
          <main>
            <Intro />
          </main>
        </div>
    );
}

export default MainPage;
