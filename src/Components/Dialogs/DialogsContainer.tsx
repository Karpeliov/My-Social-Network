import Dialogs from "./Dialogs";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
return {
    dialogState: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch: DispatchType) => {
return {
    addNewMessage: (MyMessage: string, isMine: boolean) => {dispatch({type: "ADD_NEW_MESSAGE", isMine: isMine, message: MyMessage})}
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

// before react-redux

// export type diaPropsType = {
//     // store: storeType
//
// }

// const DialogsContainer = (props: diaPropsType) => {
//
//     // const OnAddNewMessage = (MyMessage: string, isMine: boolean) => {
//     //     props.store.dispatch({type: "ADD_NEW_MESSAGE", isMine: isMine, message: MyMessage})
//     //
//     //     // action creator и action type не делал. Не вижу смысла, WS всё подсказывает лучше и удобнее
//     // }
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//
//                 const OnAddNewMessage = (MyMessage: string, isMine: boolean) => {
//                     store.dispatch({type: "ADD_NEW_MESSAGE", isMine: isMine, message: MyMessage})
//
//                     // action creator и action type не делал. Не вижу смысла, WS всё подсказывает лучше и удобнее
//                 }
//
//
//                 return (<Dialogs dialogState={store.getState().dialogsPage} addNewMessage={OnAddNewMessage}/>)
//             }
//         }
//
//
//     </StoreContext.Consumer>
//     // <Dialogs dialogState={props.store.getState().dialogsPage} addNewMessage={OnAddNewMessage}/>
// }