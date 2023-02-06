// import countries from "./countries.json";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { CountriesList } from "./components/countriesList";
import { CountriesDetails } from "./components/countriesDetails";
import countries from "./countries.json";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row" >
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:selAlpha3Code" element={<CountriesDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
