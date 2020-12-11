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
import {stateType, storeType} from './Redux/State';

type appPropsType = {
    // state: stateType
    // addNewPost: (postMessage: string) => void
    // addNewMessage: (message: string, isMine: boolean) => void
    store: storeType
}

function App(appProps: appPropsType) {
    const state = appProps.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            {/*<Navbar frndState={appProps.state.sideBar.friends}/>*/}
            <Navbar frndState={appProps.store.getState().sideBar.friends}/>
            <div className='app-wrapper-content'>

                <Route path={'/dialogs'} render={() => <Dialogs
                    addNewMessage={appProps.store.addNewMessage.bind(appProps.store)} // bind потому что this в вызываемой функции. Иначе undefined
                    dialogState={state.dialogsPage}/>}/>
                <Route path={'/profile'} render={() => <Profile
                    addNewPost={appProps.store.addNewPost.bind(appProps.store)} // bind потому что this в вызываемой функции. Иначе undefined
                    profileState={state.profilePage}/>}/>


                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>
        </div>

    );
}

export default App;
