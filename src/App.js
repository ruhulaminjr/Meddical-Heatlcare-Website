import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OpenRoute from "./components/OpenRoute/OpenRoute";
import AboutUsPage from "./components/Pages/AboutUsPage/AboutUsPage";
import BookingPage from "./components/Pages/BookingPage/BookingPage";
import BookSuccess from "./components/Pages/BookingPage/BookSuccess";
import DoctorsPage from "./components/Pages/DoctorsPage/DoctorsPage";
import Login from "./components/Pages/LoginPage/Login";
import NotFoundpage from "./components/Pages/NotFound.js/NotFound";
import ServicesDetails from "./components/Pages/ServicesPage/ServiceDetails/ServicesDetails";
import ServicesPage from "./components/Pages/ServicesPage/ServicesPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
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
          <OpenRoute path="/login">
            <Login />
          </OpenRoute>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/doctors">
            <DoctorsPage />
          </Route>
          <PrivateRoute path="/serviceinfo/:id">
            <ServicesDetails />
          </PrivateRoute>
          <PrivateRoute path="/booking/:name">
            <BookingPage />
          </PrivateRoute>
          <PrivateRoute path="/successfull">
            <BookSuccess />
          </PrivateRoute>
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
