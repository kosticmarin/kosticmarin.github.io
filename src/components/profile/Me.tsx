import React from 'react';
import './Profile.css';
import linkedinlogo from './linkedin.png';
import githublogo from './GitHub-Mark-32px.png';
import instalogo from './insta.png';

const avatar: string = 'https://avatars.githubusercontent.com/kosticmarin';
const linkedin: string = 'https://www.linkedin.com/in/marin-koštić-495949155/';
const github: string = 'https://github.com/kosticmarin';
const instagram: string = 'https://www.instagram.com/kosticmarin/';

const Profile: React.FC = () => {
    return (
        <div className="Profile">
            <header className="Profile-header">
                <img className="Profile-image" src={avatar} alt="avatar" />
                <p>Me: Marin Koštić</p>
                <a href={linkedin}><img src={linkedinlogo} alt="linkedinlogo" /></a>
                <a href={github}><img src={githublogo} alt="githublogo" /></a>
                <a href={instagram}><img src={instalogo} alt="instalogo" /></a>
            </header>
        </div>
    );
}

export default Profile;