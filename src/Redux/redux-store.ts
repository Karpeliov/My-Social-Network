import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sideBarReducer from "./sideBar-reduser";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers)

export type RootStateType = ReturnType<typeof reducers>
export type DispatchType = ReturnType<typeof store.dispatch>

export default store