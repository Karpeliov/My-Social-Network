import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../Redux/auth-reduser";
import style from "./../common/FormsControls/FormsControls.module.css"


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
                    <Field placeholder={"email"} component={Input} name={"email"}
                           validate={required}/>
                </div>
                <div>
                    <Field placeholder={"Password"} component={Input} name={"password"}
                           validate={required}
                           type={"password"}
                    />
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<AuthLoginType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const dispatch = useDispatch()

    const isAuth = useSelector<RootStateType, boolean | undefined>(state => state.auth.isAuth)

    const userId = useSelector<RootStateType, number | null>(state => state.auth.userId)

    const onSubmit = (formData: AuthLoginType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth)
        return <Redirect to={`/profile/${userId}`}/>
    else
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

export default Login;