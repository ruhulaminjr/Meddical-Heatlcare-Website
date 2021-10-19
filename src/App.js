import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUsPage from "./components/Pages/AboutUsPage/AboutUsPage";
import DoctorsPage from "./components/Pages/DoctorsPage/DoctorsPage";
import NotFoundpage from "./components/Pages/NotFound.js/NotFound";
import ServicesPage from "./components/Pages/ServicesPage/ServicesPage";
import ProviedAuth from "./context/ProviedAuth";

function App() {
  return (
    <ProviedAuth>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
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
          <Route path="*">
            <NotFoundpage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ProviedAuth>
  );
}

export default App;
