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
    <div className="body justify-content-center">
    <div className="row d-flex justify-content-center">
            {locations.map(location => (
              <div className="card col-lg-4 mx-5" key={`person-item-${location.id}`}>
                <div className="card-body">
                  <h3>{location.name}</h3>
                  <Link to={`/locations/${location.id}`} className="btn btn-info">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          
    </div>
    </div>
  );
};

export default Locations;
