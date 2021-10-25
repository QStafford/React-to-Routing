import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
const FilmData = () => {
    const { filmsid } = useParams();
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmsid}`)
            .then(res => res.json())
            .then(filmsData => setFilms(filmsData))
        }, []);
    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-container">Film Data Page</h1>
                </div>
            </section>
        </main>
    )
}

export default FilmData;