import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {getAuth, initialStateType, setAuthUserData} from "../../Redux/auth-reduser";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<DispatchType> {

    componentDidMount() {
        this.props.getAuth()
        // authAPI.getAuth().then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }

}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,
    {setAuthUserData, getAuth})(HeaderContainer);