import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

import Home from "./Pages/Home";
import Films from "./Pages/Films";
import People from "./Pages/People";
import FilmData from "./Pages/FilmData";
import PeopleData from "./Pages/PeopleData";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                    <Link to={'/Films'} className="btn btn-primary">View Films</Link>
                    <Link to={'/People'} className="btn btn-primary">View People</Link>
                </Route>
                <Route exact path="/Films">
                    <Films />
                    <Link to={'/'} className="btn btn-primary">Go Home</Link>
                </Route>
                <Route exact path="/People">
                    <People />
                    <Link to={'/'} className="btn btn-primary">Go Home</Link>
                </Route>
                <Route exact path="*">
                    {() => <h1>404 Not found Sowwy :(</h1>}
                    <Link to={'/'} className="btn btn-primary">Go Home</Link>
                </Route>
                <Route exact path = "/FilmData">
                 <FilmData />
                </Route>
                <Route exact path = "/PeopleDataa">
                    <PeopleData />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;