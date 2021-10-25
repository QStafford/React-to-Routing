import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(peopleData => setPeople(peopleData))
        }, []);
    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-container">People Page</h1>
                    {people.map(people => <div className="col-md-6" key={people.name}>
                <div className="card" id="people">
                    <div className="card-body">
                        <h4 className="card-title">{people.name}</h4>
                        <p className="cardsubtitle text-muted">{people.gender}</p>
                        <p className="card-text">{people.age} years old, {people.eye_color} eys, {people.hair_color} hair </p>
                        <Link to = {'/people/${people.id}'}>Read More</Link>
                    </div>
                </div>
            </div>
            )}
                </div>
            </section>
        </main>
    )
}

export default People;