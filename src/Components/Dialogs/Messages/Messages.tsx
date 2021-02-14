import React from "react";
import MessagesStyle from './Messages.module.css';

export type MessPropsType = {
    message: string
    id: number
    isMine: boolean
}

const Message = (props: MessPropsType) => {
    return (
        <div className={props.isMine === true ? MessagesStyle.my_Message : MessagesStyle.message}>
            {props.message} </div>

    )
}

export default Message
