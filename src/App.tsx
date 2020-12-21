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

function App(props: appPropsType) {
    const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar frndState={props.store.getState().sideBar.friends}/>
            <div className='app-wrapper-content'>

                <Route path={'/dialogs'} render={() =>
                    <Dialogs
                        // addNewMessage={props.store.addNewMessage.bind(props.store)} // bind потому что this в вызываемой функции. Иначе undefined
                        dialogState={state.dialogsPage}
                        dispatch={props.store.dispatch.bind(props.store)}/>}
                />
                <Route path={'/profile'} render={() =>
                    <Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        // addNewPost={props.store.addNewPost.bind(props.store)} // bind потому что this в вызываемой функции. Иначе undefined
                        profileState={state.profilePage}/>}
                />


                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>
        </div>

    );
}

export default App;
