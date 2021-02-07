import React, {useState} from 'react';
import ContentCSS from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/profile-reduser";

type ProfileStatusPropsType = {
    status: string
}


// function component with useState
// const ProfileStatus = (props: ProfileStatusPropsType) => {
//
//     const [value, setValue] = useState(props.status)
//     const [editMode, setEditMode] = useState(false)
//
//
//     return (
//         <div>
//             {editMode
//                 ?
//                 <div>
//                     <input
//                         value={value}
//                         onBlur={() => setEditMode(false)}
//                         onChange={(e) => setValue(e.currentTarget.value)}/>
//                 </div>
//                 :
//                 <div>
//                         <span
//                             onDoubleClick={() => setEditMode(true)}>{props.status} </span>
//                 </div>
//             }
//
//         </div>
//     )
// }
//
// export default ProfileStatus;

//class component

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        value: ""
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    // changeValue = () => {
    //     this.setState({value: false})
    // }

    render() {
        return (
            <div>

                {this.state.editMode &&
                <div>
                    <input
                        autoFocus
                        value={this.state.value}
                        onBlur={this.deactivateEditMode}
                        //onChange={(e) => setValue(e.currentTarget.value)}
                    />
                </div>}
                {!this.state.editMode &&
                <div>
                        <span
                            onClick={() => this.activateEditMode()}>{this.props.status}
                        </span>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;