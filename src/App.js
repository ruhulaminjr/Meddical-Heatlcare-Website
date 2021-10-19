import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUsPage from "./components/Pages/AboutUsPage/AboutUsPage";
import DoctorsPage from "./components/Pages/DoctorsPage/DoctorsPage";
import ServicesPage from "./components/Pages/ServicesPage/ServicesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/doctors">
            <DoctorsPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
