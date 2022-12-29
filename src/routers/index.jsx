import React, {} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import Profile from "../pages/Profile";
import ProfileRouter from "./ProfileRouter";

import '../pages/Profile/styles.module.scss'



const MainRouter = () => {

        return <Switch>
            <Route path={MAIN_URL.PROFILE} component={ProfileRouter}/>
            <Redirect to={MAIN_URL.PROFILE}/>
            <Route path="/Profile" component={Profile}/>
        </Switch>
};

export default MainRouter;