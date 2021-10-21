
import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => setFilms(films))
    },[])

    return (

        <div className="body row justify-content-center">
        <div className="col-lg-6">
            <ul className="userid">
                    {films.map(film => (
                        <li className= "card" key={`film-item-${film.id}`}>
                           <div className="card-body row d-flex">
                               <img src={film.movie_banner} alt="movie-banner" className="mb-3" />
                               <h3>{film.title}</h3>
                                <p>{film.description}</p>
                                <Link to={`/films/${film.id}`} className="btn">Details</Link>
                           </div>
                        </li>
                    )
                    )}
                </ul>
        </div>
            </div>
    )
}
export default Films