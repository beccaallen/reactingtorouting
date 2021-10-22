import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(people => setPeople(people))
    }, [])

    return (
        <div className="body justify-content-center">
            <div className="row d-flex justify-content-center">
                
                {people.map(person => (
                            <div className= "card col-lg-4 mx-5" key={`person-item-${person.id}`}>
                               <div className="card-body">
                                   <h3 className="card-title">{person.name}</h3>
                                    <Link to={`/people/${person.id}`} className="btn btn-info">Details</Link>
                               </div>
                            </div>
                        )
                        )}
            </div>
        </div>
    )
}

export default People