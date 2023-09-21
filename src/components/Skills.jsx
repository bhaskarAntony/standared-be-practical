import React, { useState } from 'react';
import '../styles/skills.css';
import skillVideo from '../images/unlock-video.mp4'
import hackethon from '../images/hackethon.mp4'
import video1 from '../images/vedio1.mp4'
import video2 from '../images/video2.mp4'
import video3 from '../images/video3.mp4'

function Skills() {
  const [isPlay, setIsPlay] = useState(false);
  const [playVideoUrl, setPlayVideoUrl] = useState(skillVideo);

  const handleVideoClick = (videoSrc) => {
    setIsPlay(true);
    setPlayVideoUrl(videoSrc);
  };

  return (
    <section className=' skillsmain overflow-hidden'>
      <div className=" skillsecond">
      {/* <div className="section-blur"></div>
        <div className="section-blur2"></div> */}
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="left col-12 col-md-12 col-lg-10">
              <video src={playVideoUrl} autoPlay muted loop></video>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="right">
              <div className="text-right">
                <h1>Why Choose Be-Practical?</h1>
                <p className='mt-3'>We offer unlimited access to the best courses from top trainers, providing hundreds of practical lessons in multiple fields.</p>
                <p></p>
                <div className="status">
                  <div className="row video-status d-flex g-2">
                    <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                      <div className="video">
                        <video src={hackethon} autoPlay muted loop onClick={() => handleVideoClick(hackethon)}></video>
                        
                      </div>
                    </div>
                    <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                      <div className="video">
                        <video src={video1} autoPlay muted loop onClick={() => handleVideoClick(video1)}></video>
                        
                      </div>
                    </div>
                    <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                      <div className="video">
                        <video src={video2} autoPlay muted loop onClick={() => handleVideoClick(video2)}></video>
                        
                      </div>
                    </div>
                    <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                      <div className="video">
                        <video src={video3} autoPlay muted loop onClick={() => handleVideoClick(video3)}></video>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
