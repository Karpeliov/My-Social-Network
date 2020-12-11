import {dialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessPropsType} from "../Components/Dialogs/Messages/Messages";
import {PostTextType} from "../Components/Profile/MyPosts/MyPosts";
import {friendsPropsType, friendsType} from "../Components/Navbar/Friends/Friends";
import {RenderEntireTree} from "../render";

export type profilePageType = {
    posts: Array<PostTextType>

}

export type dialogsPageType = {
    messages: Array<MessPropsType>
    dialogs: Array<dialogsType>
}

type sideBarType = {
    friends: Array<friendsType>

}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sideBar: sideBarType

}


let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'WHY DO WE FALL? SO THAT WE CAN LEARN TO PICK OURSELVES BACK UP.', likeCounts: 12},
            {
                id: 2,
                message: 'YOU EITHER DIE A HERO, OR LIVE LONG ENOUGH TO SEE YOURSELF BECOME A VILLAIN.',
                likeCounts: 20
            },
            {
                id: 3,
                message: 'THE NIGHT IS DARKEST JUST BEFORE THE DAWN. AND I PROMISE YOU, THE DAWN IS COMING.',
                likeCounts: 1000
            },
        ],

    },

    dialogsPage: {
        messages: [
            {id: 1, message: "Hi there!"},
            {id: 2, message: "Where are you?"},
            {id: 3, message: "How do you feel?"},
            {id: 4, message: "How do you feel?"}
        ],
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
            {id: 3, name: 'Two-Face', diaAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"},
            {id: 4, name: 'Penguin', diaAva: "https://www.shareicon.net/data/2016/01/05/233521_penguin_256x256.png"}
        ],
    },
    sideBar: {
        friends: [
            {
                id: 1,
                frndName: "Catwomen",
                frndAva: "https://pbs.twimg.com/profile_images/378800000615400243/b474e9507557fccf77744a50ecf37a69.jpeg"
            },
            {
                id: 2,
                frndName: "Two-Face",
                frndAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"
            },
            {
                id: 3,
                frndName: "Harly",
                frndAva: "https://pbs.twimg.com/profile_images/644961549614870528/z2V9HZE5_400x400.jpg"
            },

        ]
    }


}

export function addNewPost(postMessage: string) {
    let newPost: PostTextType;
    newPost = {id: 4, message: postMessage, likeCounts: 0};
    state.profilePage.posts.unshift(newPost)

    RenderEntireTree(state)
}

export default state;


// Данные для постов
// let posts = [
//     {id: 1, message: 'WHY DO WE FALL? SO THAT WE CAN LEARN TO PICK OURSELVES BACK UP.', likeCounts: 12},
//     {
//         id: 2,
//         message: 'YOU EITHER DIE A HERO, OR LIVE LONG ENOUGH TO SEE YOURSELF BECOME A VILLAIN.',
//         likeCounts: 20
//     },
//     {
//         id: 3,
//         message: 'THE NIGHT IS DARKEST JUST BEFORE THE DAWN. AND I PROMISE YOU, THE DAWN IS COMING.',
//         likeCounts: 1000
//     },
// ]
// // Данные для сообщений и диалога
// let dialogs = [
//     {id: 1, name: 'Yania'},
//     {id: 2, name: 'Kira'},
//     {id: 3, name: 'Vova'},
//     {id: 4, name: 'Karina'}
// ]
//
// let messages = [
//     {id: 1, message: "Hi there!"},
//     {id: 2, message: "Where are you?"},
//     {id: 3, message: "How do you feel?"},
//     {id: 4, message: "How do you feel?"}
// ]