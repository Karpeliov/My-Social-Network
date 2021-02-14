import React from 'react';
import ContentCSS from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/profile-reduser";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {


    return (
        <div>
            {/*<div className={ContentCSS.imgStyle}>*/}

            {/*    <img src='https://s1.cdn.autoevolution.com/images/gallery/AUDI-RS5-Sportback-6721_15.jpg'/>*/}
            {/*    */}
            {/*</div>*/}
            <div className={ContentCSS.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.fullName}
                {props.profile.aboutMe}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;