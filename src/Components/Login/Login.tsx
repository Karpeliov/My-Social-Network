import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


export type LoginPropsType = {
    // isAuth: boolean
    // login: string
}

export type AuthLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<AuthLoginType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} component={Input} name={"email"}
                           validate={required}/>
                </div>
                <div>
                    <Field placeholder={"Password"} component={Input} name={"password"}
                           validate={required}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<AuthLoginType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    // const dispatch = useDispatch()
    // // @ts-ignore
    // const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    // // @ts-ignore
    // const userId = useSelector<RootStateType, number>(state => state.auth.userId)
    const onSubmit = (formData: AuthLoginType) => {
        console.log(formData)
        // authAPI.login(formData)
    }

    return (
        <div style={{color: "white"}}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
    // if (isAuth)
    //     return <Redirect to={`/profile/${userId}`}/>
    // else
    //     return <div>
    //         <h1>Login</h1>
    //         <LoginReduxForm onSubmit={onSubmit}/>
    //     </div>
}

export default Login;