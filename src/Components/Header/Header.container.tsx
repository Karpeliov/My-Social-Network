import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {getAuth, setAuthUserData} from "../../Redux/auth-reduser";

class HeaderContainer extends React.Component<DispatchType> {

    componentDidMount() {
        this.props.getAuth()
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