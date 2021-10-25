import { useState, useEffect } from "react";
import { useParams } from "react-router";
const PeopleData = () => {
    const { peopleid } = useParams();
    const [Ppl, setPeople] = useState(null)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(Ppl => setPeople(Ppl))
        }, []);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-container">People Data Page for {Ppl.name}</h1>
                </div>
            </section>
        </main>
    )
}

export default PeopleData;