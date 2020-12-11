import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogItem, {dialogsType} from './DialogItem/DialogItem';
import DialogsStyle from './Dialogs.module.css';
import Message, {MessPropsType} from './Messages/Messages';

type dialogStateType = {
    dialogs: Array<dialogsType>
    messages: Array<MessPropsType>
}

export type diaPropsType = {
    dialogState: dialogStateType
}

const Dialogs = (diaProps: diaPropsType) => {


    let dialogsElement = diaProps.dialogState.dialogs.map((dia) => <DialogItem name={dia.name} id={dia.id} diaAva={dia.diaAva}/>)

    let messageElement = diaProps.dialogState.messages.map((mess) => <Message message={mess.message}/>)

    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={DialogsStyle.messages}>
                {messageElement}
            </div>

            <button>Send Message</button>
            <textarea />


        </div>
    )

}

export default Dialogs;

