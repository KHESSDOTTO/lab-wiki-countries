import { Link } from "react-router-dom";


export function CountriesList (props) {
  return (
    <section  className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        {props.countries.map(country => {
          return (
            <div className="list-group-item list-group-item-action">
              <img src="" alt="country flag" /><br/>
              <Link to={country.alpha3Code}>{country.name.common}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

