import {dialogsPageType, MainActionType, MessType, } from "./State";


export const addNewMessageAT = "ADD_NEW_MESSAGE";

const dialogsReducer = (dialogState: dialogsPageType, action: MainActionType) => {


    if (action.type === addNewMessageAT) {
        let newMessage: MessType;
        newMessage = {id: 1, message: action.message, isMine: action.isMine};
        dialogState.messages.push(newMessage)
    }


    return dialogState
}

export default dialogsReducer