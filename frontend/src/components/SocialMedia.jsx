import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://github.com/aarondarwish" target="_blank">
                <div>
                    <BsGithub />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/aarondarwish/" target="_blank">
                <div>
                    <BsLinkedin />
                </div>
            </a>
        </div>
    );
}

export default SocialMedia;