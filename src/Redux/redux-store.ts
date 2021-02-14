import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sideBarReducer from "./sideBar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

export type RootStateType = ReturnType<typeof reducers>
export type DispatchType = ReturnType<typeof store.dispatch>



export default store