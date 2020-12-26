export type AddNewMessageActionType = {
    type: "ADD_NEW_MESSAGE"
    message: string
    isMine: boolean
}

export type dialogsType = {
    name: string
    id: number
    diaAva: string

}

export type MessType = {
    id: number
    message: string
    isMine: boolean
}

// export type initialDialogStateType = {
//     messages: Array<MessType>
//     dialogs: Array<dialogsType>
// }

export type initialDialogStateType = typeof initialDialogState

let initialDialogState = {
    messages: [
        {id: 1, message: "Hi there!", isMine: false},
        {id: 2, message: "Where are you?", isMine: false},
        {id: 3, message: "How do you feel?", isMine: false},

    ] as Array<MessType>,
    dialogs: [
        {
            id: 1,
            name: 'Catwoman',
            diaAva: "https://pbs.twimg.com/profile_images/378800000615400243/b474e9507557fccf77744a50ecf37a69.jpeg"
        },
        {
            id: 2,
            name: 'Harly',
            diaAva: "https://pbs.twimg.com/profile_images/644961549614870528/z2V9HZE5_400x400.jpg"
        },
        {
            id: 3,
            name: 'Two-Face',
            diaAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"
        },
        {id: 4, name: 'Penguin', diaAva: "https://www.shareicon.net/data/2016/01/05/233521_penguin_256x256.png"}
    ] as Array<dialogsType>
}


export const addNewMessageAT = "ADD_NEW_MESSAGE";

const dialogsReducer = (dialogState = initialDialogState, action: AddNewMessageActionType): initialDialogStateType => {


    if (action.type === addNewMessageAT) {
        let newMessage: MessType;
        newMessage = {id: 1, message: action.message, isMine: action.isMine};
        dialogState.messages.push(newMessage)
    }


    return dialogState
}

export default dialogsReducer