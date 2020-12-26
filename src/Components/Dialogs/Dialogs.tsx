import React, {ChangeEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import DialogItem, {dialogsType} from './DialogItem/DialogItem';
import DialogsStyle from './Dialogs.module.css';
import Message, {MessPropsType} from './Messages/Messages';
import {AddNewMessageActionType, MessType} from "../../Redux/dialogs-reduser";

type dialogStateType = {
    dialogs: Array<dialogsType>
    messages: Array<MessType>
}

export type diaPropsType = {
    dialogState: dialogStateType
    addNewMessage: (MyMessage: string, isMine: boolean) => void

}

const Dialogs = (props: diaPropsType) => {

    let dialogsElement = props.dialogState.dialogs.map((dia) => <DialogItem name={dia.name} id={dia.id}
                                                                            diaAva={dia.diaAva}/>)

    let messageElement = props.dialogState.messages.map((mess) => <Message message={mess.message} id={mess.id}
                                                                           isMine={mess.isMine}/>)

    const [MyMessage, setMyMessage] = useState<string>("")

    const onChangeHandlerMyMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMyMessage(e.currentTarget.value)
    }

    const addNewMessage = () => {
        props.addNewMessage(MyMessage, true)
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

            <button onClick={addNewMessage} className={DialogsStyle.addMessageBtn}>Send Message</button>
            <textarea value={MyMessage} onChange={onChangeHandlerMyMessage} onKeyPress={(e) => {
                if (e.ctrlKey === true) addNewMessage()
            }}
            />
        </div>
    )
}

export default Dialogs;

