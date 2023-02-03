// import countries from "./countries.json";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { CountriesList } from "./components/countriesList";
import { CountriesDetails } from "./components/countriesDetails";

function App() {
  return (
    <div>
      <NavBar />
      <CountriesList />
      <Routes>
        <Route path="/:id" element={<CountriesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
