import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Locations = () => {
  const [locations, setLocation] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((locations) => setLocation(locations));
  });

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <ul>
            {locations.map(location => (
              <li className="card" key={`person-item-${location.id}`}>
                <div className="card-body row d-flex">
                  <h3>{location.name}</h3>
                  <Link to={`/locations/${location.id}`} className="btn btn-info">
                    Details
                  </Link>
                </div>
              </li>
            ))}
          
        </ul>
        </div>
    </div>
  );
};

export default Locations;
