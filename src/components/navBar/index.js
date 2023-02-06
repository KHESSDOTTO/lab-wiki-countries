import { Link } from "react-router-dom";

export function NavBar () {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand"  to="/">WikiCountries</Link>
      </div>
    </nav>
  );
};


