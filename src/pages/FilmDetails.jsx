import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const FilmDetails = () => {
  const { filmid } = useParams();
  const [film, setFilm] = useState(null);
  const history = useHistory()

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((res) => res.json())
      .then((film) => setFilm(film));
  }, []);
  return (
    <div className="vh-100">
    <div className="row justify-content-center">
      <div className="card col-7 mb-10 p-5">
        <h2>{film?.title}</h2>
        <h4>
          {film?.original_title} : {film?.original_title_romanised}
        </h4>
        <ul class="list-group list-group-flush p-2">
          <li class="list-group-item">{film?.description}</li>
          <li class="list-group-item"><strong>Director:</strong> {film?.director}</li>
          <li class="list-group-item"><strong>Release Date:</strong> {film?.release_date}</li>
          <li class="list-group-item"><strong>Run Time:</strong> {film?.running_time} min</li>
          <li class="list-group-item"><strong>Rotten Tomatoes Score:</strong> {film?.rt_score}%</li>
        <button
              className="btn btn-back mt-5"
              onClick={() => history.push("/films")}
            >
               back to films
            </button> 
        </ul>
      </div>
    </div>
    </div>
  );
};

export default FilmDetails;
