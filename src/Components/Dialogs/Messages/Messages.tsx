import React from "react";
import MessagesStyle from './Messages.module.css';

export type MessPropsType = {
    message: string
    id?: number

}

const Message = (MessProps: MessPropsType) => {
    return(
        <div className={MessagesStyle.message}> {MessProps.message} </div>

    )
}

export default Message
