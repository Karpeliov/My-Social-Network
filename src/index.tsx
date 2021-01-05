import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

export type storeType = typeof store

// export let RenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );



// }
// RenderEntireTree()
// RenderEntireTree(store.getState()) // с Редаксом по видео

// store.subscribe(RenderEntireTree) // по факту работает так

// store.subscribe(() => {
//     let state = store.getState()
//     RenderEntireTree(state)
// })
// subscribe(RenderEntireTree)     // с Редаксом по видео


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
