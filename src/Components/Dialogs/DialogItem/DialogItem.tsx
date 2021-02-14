import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogItemStyle from './DialogItem.module.css';

export type dialogsType = {
    name: string
    id: number
    diaAva: string

}

const DialogItem = (diaProps: dialogsType) => {
    return (
        <div className={DialogItemStyle.dialog}>
            <img src={diaProps.diaAva} alt={"avatar"}/>

            <NavLink to={"/dialogs/" + diaProps.id} activeClassName={DialogItemStyle.active}>
                {diaProps.name}

            </NavLink>
        </div>
    )
}

export  default DialogItem