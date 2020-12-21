import React from 'react';
import ContentCSS from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={ContentCSS.imgStyle}>
                {/*<img src='https://i.ytimg.com/vi/vS4v07PIcwI/maxresdefault.jpg' width="750" height="400"/>*/}
                <img
                     // src='https://www.carscoops.com/wp-content/uploads/2019/03/e46ed0bb-abt-rs5-r-sportback-0.jpg'/>
                    src='https://s1.cdn.autoevolution.com/images/gallery/AUDI-RS5-Sportback-6721_15.jpg'/>
            </div>
            <div className={ContentCSS.descriptionBlock}>
                ava + description

            </div>

        </div>
    )
}

export default ProfileInfo;