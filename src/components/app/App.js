import Header from "../header/header";
import Main from "../main/main";
import About from "../about/about";
import Services from "../services/services";
import Deadlines from "../price/price";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Services />
      <Deadlines />
      <Footer />
    </div>
  );
}

export default App;
