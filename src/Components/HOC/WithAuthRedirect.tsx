import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean | undefined
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}



