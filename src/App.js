import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Routes from "./Routes";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
