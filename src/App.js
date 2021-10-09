import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
