import React, {ChangeEvent, useState} from 'react';
import DialogItem, {dialogsType} from './DialogItem/DialogItem';
import DialogsStyle from './Dialogs.module.css';
import Message from './Messages/Messages';
import {MessType} from "../../Redux/dialogs-reduser";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {TextAria} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

type dialogStateType = {
    dialogs: Array<dialogsType>
    messages: Array<MessType>
}

export type diaPropsType = {
    dialogState: dialogStateType
    addNewMessage: (MyMessage: string, isMine: boolean) => void
    // isAuth: boolean | undefined
}

const Dialogs = (props: diaPropsType) => {


    let dialogsElement = props.dialogState.dialogs.map((dia) => <DialogItem name={dia.name} key={dia.id} id={dia.id}
                                                                            diaAva={dia.diaAva}/>)

    let messageElement = props.dialogState.messages.map((mess) => <Message message={mess.message} key={mess.id}
                                                                           id={mess.id}
                                                                           isMine={mess.isMine}/>)

    const [MyMessage, setMyMessage] = useState<string>("")

    const onChangeHandlerMyMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMyMessage(e.currentTarget.value)
    }

    const onChangeHandlerMyMessage2 = (formData: any) => {
        setMyMessage(formData)
    }

    const addNewMessage = () => {
        // if (MyMessage === "") {
        //     window.alert("Enter Your Message!")
        // } else
        props.addNewMessage(MyMessage, true)
        setMyMessage("")
    }

    const addNewMessageReduxForm = (formData: any) => {
        console.log(formData.newMessage)
        props.addNewMessage(formData.newMessage, true)

    }

    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={DialogsStyle.messages}>
                {messageElement}
            </div>

            {/*<button onClick={addNewMessage} className={DialogsStyle.addMessageBtn}>Send Message</button>*/}
            {/*<textarea value={MyMessage} onChange={onChangeHandlerMyMessage} onKeyPress={(e) => {*/}
            {/*    if (e.ctrlKey) addNewMessage()*/}
            {/*}}*/}
            {/*/>*/}
            <div>
                <AddMessageReduxForm onSubmit={addNewMessageReduxForm}/>
            </div>

        </div>
    )
}

let maxLengthCreator10 = maxLengthCreator(100)
let minLengthCreator2 = minLengthCreator(2)

const AddMessageForm = (props: InjectedFormProps<any>) => {
    return (
        <Form onSubmit={props.handleSubmit} >
        <button className={DialogsStyle.addMessageBtn}>Send Message</button>
        <Field component={TextAria} name={"newMessage"} placeholder={"Enter your message"}
               validate={[required, maxLengthCreator10, minLengthCreator2]}
               cols={45} rows={5}
        />

    </Form>)

}

const AddMessageReduxForm = reduxForm({form: 'AddMessage'})(AddMessageForm)

export default Dialogs;

