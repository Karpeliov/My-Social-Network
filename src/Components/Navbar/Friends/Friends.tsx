import React from 'react';
import FrndCss from './Friends.module.css';


export type friendsType = {

    id: number
    frndAva: string
    frndName: string
}

export type friendsPropsType = {
    frndState: Array<friendsType>
}

const Friends = (friendsProps: friendsPropsType) => {

    let friendsElement = friendsProps.frndState.map((f) => <Friend id={f.id}
                                                                   frndAva={f.frndAva}
                                                                   frndName={f.frndName}/>)
    return (
        <div className={FrndCss.main}>Friends
            <hr/>
            {friendsElement}

        </div>)
}

const Friend = (friendProps: friendsType) => {
    return (
        <div >
            <div className={FrndCss.item}>
                <div><img src={friendProps.frndAva}/></div>
                {friendProps.frndName}

            </div>
        </div>)
}

export default Friends