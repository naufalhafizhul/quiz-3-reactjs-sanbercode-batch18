  import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import EditMovie from "./Movielist";
import Login from "./login";

export default Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/movielist">
                <Movie />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    );
};