import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import React, { Component } from 'react';
import Login from "./login.component";
import Register from "./register.component";
import Profile from "./register.component";
import BoardAdmin from "./protectedComponent/board-admin.component";
import BoardUser from "./protectedComponent/board-user.component";
import BoardModerator from "./protectedComponent/board-moderator.component";
import Home from "./home.component";

class Router extends Component {
    render() {
        return (
            <div className="container mt-3">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route path="/user" component={BoardUser} />
                        <Route path="/mod" component={BoardModerator} />
                        <Route path="/admin" component={BoardAdmin} />
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default Router
