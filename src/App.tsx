import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {storeType} from "./index";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type appPropsType = {
    store: storeType
}

function App(props: appPropsType) {
    const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar frndState={props.store.getState().sideBar.friends}/>
            <div className='app-wrapper-content'>

                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer
                        // store={props.store}
                    />}
                />
                <Route path={'/profile'} render={() =>
                    <Profile
                        // store={props.store}
                    />}
                />


                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>
        </div>

    );
}

export default App;
