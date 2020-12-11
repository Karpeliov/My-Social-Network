import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, {addNewMessage, stateType, subscribe} from './Redux/State';
// import {addNewPost} from './Redux/State';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/State';


export let RenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                {/*<App addNewPost={addNewPost} addNewMessage={addNewMessage}  state={state}/>*/}
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

  RenderEntireTree()

store.subscribe(RenderEntireTree)
// subscribe(RenderEntireTree)

// ReactDOM.render(
//   <React.StrictMode>
//       <BrowserRouter>
//     <App addNewPost={addNewPost} state={state} />
//       </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
