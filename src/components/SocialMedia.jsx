import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';


const SocialMedia = () => (

  <div className="app__social">
    <div>
      <a href='https://twitter.com/ChilledAlex97'><BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/alex-zorola-b2b220247/'><FaLinkedin /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/chilledalex97/'><BsInstagram /></a>
    </div>
    <div>
      <a href='https://github.com/AlexZorola'><FaGithub /></a>
    </div>
    <div>
      <a href='https://www.youtube.com/channel/UCJgkOQkGmZva27BOJ-TVBRA'><FaYoutube /></a>
    </div>
  </div>
);

export default SocialMedia;
