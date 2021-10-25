import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Films = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(filmsData => setFilms(filmsData))
        }, []);
    return (
        <div>
            {films.map(films => <div className="col-md-6" key={films.id}>
                <div className="card shadow my-2" id="film">
                    <div className="card-body">
                        <h4 className="card-title">{films.title}</h4>
                        <p className="cardsubtitle text-muted">Original title: {films.original_title_romanised}</p>
                        <p className="card-text">{films.description}</p>
                        <Link to = {'/Films/${films.id}'}>Read More</Link>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Films;