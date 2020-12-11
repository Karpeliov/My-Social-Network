import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {addNewPost, stateType} from './Redux/State';
import {BrowserRouter} from "react-router-dom";

type RenderEntireTreePropsType = {
    state: stateType
}

export let RenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addNewPost={addNewPost} state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
