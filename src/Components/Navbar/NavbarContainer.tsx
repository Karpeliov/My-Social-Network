import {connect} from "react-redux";
import Navbar from "./Navbar";
import {DispatchType, RootStateType} from "../../Redux/redux-store";

let mapStateToProps = (state: RootStateType) => {
    return {
        frndState: state.sideBar.friends
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addNewMessage: () => {dispatch()}
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;