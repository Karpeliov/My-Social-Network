import {addNewPost, setUserProfile} from "../../../Redux/profile-reduser";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

// let mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         addNewPost: (postMessage: string) => {dispatch(addNewPost(postMessage))}
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addNewPost, setUserProfile})(MyPosts)

export default MyPostsContainer;

// before react-redux
// type propsType = {
//     // posts: Array<PostTextType>
//     // dispatch: (action: AddNewPostActionType) => void
//     // store: storeType
// }

// const MyPostsContainer = (props: propsType) => {
//
//     // const OnAddNewPost = (postMessage: string) => {
//     //     props.store.dispatch(addNewPostAC(postMessage)) // с Action Creator
//     // }
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const OnAddNewPost = (postMessage: string) => {
//                     store.dispatch(addNewPostAC(postMessage)) // с Action Creator
//                 }
//
//                 return <MyPosts posts={store.getState().profilePage.posts} addNewPost={OnAddNewPost}/>
//             }}
//
//
//     </StoreContext.Consumer>
//     //<MyPosts posts={props.store.getState().profilePage.posts} addNewPost={OnAddNewPost}/>
// }