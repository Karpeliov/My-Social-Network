export type friendsType = {

    id: number
    frndAva: string
    frndName: string
}

// export type initialSideBarState = {
//     friends: Array<friendsType>
//
// }

export type initialSideBarState = typeof initialSideBarState

let initialSideBarState = {
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

    ] as Array<friendsType>

}

const sideBarReducer = (sideBarState = initialSideBarState, action: any) => {


    if (action.type === "SIDE_BAR") {

    }


    return sideBarState
}

export default sideBarReducer