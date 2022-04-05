import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://github.com/aarondarwish">
                <div>
                    <BsGithub />
                </div>
            </a>
            <div>
                <BsLinkedin />
            </div>
        </div>
    );
}

export default SocialMedia;