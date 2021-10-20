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
        <div className="body row justify-content-center">
            <div className="col-7">
                <ul>
                {people.map(person => (
                            <li className= "card row" key={`person-item-${person.id}`}>
                               <div className="card-body">
                                   <h3>{person.name}</h3>
                                    <Link to={`/people/${person.id}`} className="btn btn-info">Details</Link>
                               </div>
                            </li>
                        )
                        )}
                </ul>
            </div>
        </div>
    )
}

export default People