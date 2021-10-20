import { BrowserRouter, Route, Switch } from "react-router-dom";
// npm i react-router-dom
import "./style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Locations from "./pages/Locations";
import FilmDetails from "./pages/FilmDetails";
import PeopleDetails from "./pages/PeopleDetails";
import LocationDetail from "./pages/LocationDetail";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/films/:filmid">
            <FilmDetails />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/:peopleid">
            <PeopleDetails />
            </Route>
          <Route exact path="/locations">
            <Locations />
          </Route>
          <Route exact path = "/locations/:locationid">
            <LocationDetail />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
