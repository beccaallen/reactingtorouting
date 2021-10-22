import { useEffect, useState } from "react";
import { useParams, useHistory  } from "react-router-dom";

const PeopleDetails = () => {
    const { peopleid } = useParams();
    const [people, setPeople] = useState(null);
    const history =useHistory()
    
  
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
        .then(res => res.json())
        .then(people => setPeople(people))
    }, [])

    return (

<div className="vh-100">
  <div className="row justify-content-center">
  <div className="card col-7 p-5">
          <h2>{people?.name}</h2>
         
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Gender:</strong> {people?.gender}</li>
            <li class="list-group-item"><strong>Age:</strong> {people?.age}</li>
            <li class="list-group-item"><strong>Eye Color:</strong> {people?.eye_color}</li>
            <li class="list-group-item"><strong>Hair Color:</strong> {people?.hair_color}</li>
          <button
              className="btn btn-back mt-5"
              onClick={() => history.push("/people")}
            >
               back to people
            </button> 
          </ul>
        </div>
  </div>
</div>
    )
}

export default PeopleDetails
