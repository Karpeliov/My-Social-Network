import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sideBarReducer from "./sideBar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

// @ts-ignore
window.store = store

export type RootStateType = ReturnType<typeof reducers>
export type DispatchType = ReturnType<typeof store.dispatch>



export default store