import { Link, useParams } from "react-router-dom";


export function CountriesDetails (props) {
  const { selAlpha3Code } = useParams();
  let foundCountry = props.countries.find((country) => {return selAlpha3Code === country.alpha3Code});
  const arrOfBorderNames = [];
  foundCountry.borders.forEach(cE => arrOfBorderNames.push(cE));
  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border, index) =>
                    <li>
                      <Link to={`/${border}`}>
                        {props.countries.find(country => {
                        return border === country.alpha3Code
                        }).name.common}
                      </Link>
                    </li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};



