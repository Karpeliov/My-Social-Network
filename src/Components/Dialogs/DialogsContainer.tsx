import React from 'react';
import Dialogs from "./Dialogs";
import {storeType} from "../../index";
import store from "../../Redux/redux-store";
import StoreContext from '../../StoreContext';


export type diaPropsType = {
    // store: storeType

}

const DialogsContainer = (props: diaPropsType) => {

    // const OnAddNewMessage = (MyMessage: string, isMine: boolean) => {
    //     props.store.dispatch({type: "ADD_NEW_MESSAGE", isMine: isMine, message: MyMessage})
    //
    //     // action creator и action type не делал. Не вижу смысла, WS всё подсказывает лучше и удобнее
    // }

    return <StoreContext.Consumer>
        {
            (store) => {

                const OnAddNewMessage = (MyMessage: string, isMine: boolean) => {
                    store.dispatch({type: "ADD_NEW_MESSAGE", isMine: isMine, message: MyMessage})

                    // action creator и action type не делал. Не вижу смысла, WS всё подсказывает лучше и удобнее
                }


                return (<Dialogs dialogState={store.getState().dialogsPage} addNewMessage={OnAddNewMessage}/>)
            }
        }


    </StoreContext.Consumer>
    // <Dialogs dialogState={props.store.getState().dialogsPage} addNewMessage={OnAddNewMessage}/>
}

export default DialogsContainer;

