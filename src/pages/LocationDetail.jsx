import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import Locations from "./Locations";

const LocationDetail = () => {
    const { locationid} = useParams();

    const [location, setLocation] = useState(null)

    useEffect(()=> {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
        .then(res => res.json())
        .then(location => setLocation(location))
    })
    return (
        <div className="vh-100">
          <div className="row justify-content-center">
          <div className="card col-7 p-5">
            <ul class="list-group list-group-flush p-5">
              <li class="list-group-item"> <h2>{location?.name}</h2></li>
              <li class="list-group-item"><strong>Climate:</strong> {location?.climate}</li>
              <li class="list-group-item"><strong>Terrain:</strong> {location?.terrain}</li>
              <li class="list-group-item"><strong>Surface Water:</strong> {location?.surface_water}%</li>
            </ul>
          </div>
                </div>
        </div>
    )

}

export default LocationDetail