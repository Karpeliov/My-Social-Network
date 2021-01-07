import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Users from "./Components/Users/Users";
import UsersContainer from "./Components/Users/UsersContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>

                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer/>}/>

                <Route path={'/profile'} render={() =>
                    <Profile/>}/>

                <Route path={'/users'} render={() =>
                    <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>

            </div>
        </div>
    );
}

export default App;
