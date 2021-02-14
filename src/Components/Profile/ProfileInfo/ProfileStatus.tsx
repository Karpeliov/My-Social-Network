import React, {ChangeEvent, useState} from 'react';
import ContentCSS from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/profile-reduser";

type ProfileStatusPropsType = {
    status: string
    // updateStatus: (status: string) => string
}


// function component with useState
// const ProfileStatus = (props: ProfileStatusPropsType) => {
//
//     const [status, setStatus] = useState(props.status)
//     const [editMode, setEditMode] = useState(false)
//
//
//     return (
//         <div>
//             {editMode
//                 ?
//                 <div>
//                     <input
//                         autoFocus
//                         value={status}
//                         onBlur={() => setEditMode(false)}
//                         onChange={(e) => setStatus(e.currentTarget.value)}/>
//                 </div>
//                 :
//                 <div>
//                         <span
//                             onDoubleClick={() => setEditMode(true)}>{this.props.status} </span>
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
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
    }

    render() {
        return (
            <div>

                {this.state.editMode &&
                <div>
                    <input
                        autoFocus
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onStatusChange}
                    />
                </div>}
                {!this.state.editMode &&
                <div>
                        <span
                            onClick={() => this.activateEditMode()}>{this.props.status || "No status"}
                        </span>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;