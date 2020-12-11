import React, {ChangeEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import DialogItem, {dialogsType} from './DialogItem/DialogItem';
import DialogsStyle from './Dialogs.module.css';
import Message, {MessPropsType} from './Messages/Messages';
import {MessType} from "../../Redux/State";

type dialogStateType = {
    dialogs: Array<dialogsType>
    messages: Array<MessType>
}

export type diaPropsType = {
    dialogState: dialogStateType
    addNewMessage: (message: string, isMine: boolean) => void

}

const Dialogs = (diaProps: diaPropsType) => {

    let dialogsElement = diaProps.dialogState.dialogs.map((dia) => <DialogItem name={dia.name} id={dia.id} diaAva={dia.diaAva}/>)

    let messageElement = diaProps.dialogState.messages.map((mess) => <Message message={mess.message} id={mess.id} isMine={mess.isMine}/>)

    const [MyMessage, setMyMessage] = useState<string>("")

    const onChangeHandlerMyMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMyMessage(e.currentTarget.value)
    }
    let a = diaProps.dialogState.messages

    const addNewMessage = () => {
        diaProps.addNewMessage(MyMessage, true)
        setMyMessage("")
    }



    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={DialogsStyle.messages}>
                {messageElement}
            </div>

            <button onClick={addNewMessage}>Send Message</button>
            <textarea value={MyMessage} onChange={onChangeHandlerMyMessage} onKeyPress={(e) => {
                if (e.ctrlKey === true) addNewMessage()}}
            />


        </div>
    )

}

export default Dialogs;

