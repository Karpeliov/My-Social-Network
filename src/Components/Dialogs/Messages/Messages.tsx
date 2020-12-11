import React from "react";
import MessagesStyle from './Messages.module.css';

export type MessPropsType = {
    message: string
    id: number
    isMine: boolean
}

const Message = (MessProps: MessPropsType) => {
    return (
        <div className={MessProps.isMine === true ? MessagesStyle.my_Message : MessagesStyle.message}>
            {MessProps.message} </div>

    )
}

export default Message
