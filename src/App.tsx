import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { stateType } from './Redux/State';

type appPropsType = {
    state: stateType
    addNewPost: (postMessage: string) => void
}

function App(appProps: appPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar frndState={appProps.state.sideBar.friends}/>
                <div className='app-wrapper-content'>
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}


                    {/*<Route path={'/profile'} render={() => <Profile posts={appProps.state.profilePage.posts}/>}/>*/}
                    {/*<Route path={'/dialogs'} render={() => <Dialogs messages={appProps.state.dialogsPage.messages} dialogs={appProps.state.dialogsPage.dialogs}/>}/>*/}
                    <Route path={'/dialogs'} render={() => <Dialogs dialogState={appProps.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile addNewPost={appProps.addNewPost} profileState={appProps.state.profilePage}/>}/>

                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>


                </div>
            </div>

    );
}

export default App;
