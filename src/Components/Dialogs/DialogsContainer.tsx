import Dialogs from "./Dialogs";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogState: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addNewMessage: (MyMessage: string, isMine: boolean) => {
            dispatch({type: "ADD_NEW_MESSAGE", isMine: isMine, message: MyMessage})
        }
    }
}

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer;

