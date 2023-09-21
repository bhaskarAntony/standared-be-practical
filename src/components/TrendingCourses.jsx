import React, { useEffect } from 'react';
import '../styles/allcourses.css'
import AOS from 'aos';

var courses = [
    {
        name: "MERN Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Java Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Python Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Python Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

function TrendingCourses() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
    return (
        <div className='container-fluid'>
            <div className="row">
                {courses.map((item, index) => (
                      <div className="col-12 col-md-6 col-lg-3 mb-3">
                      <div className="card course-card" data-aos="zoom-in">
                      <div className="course-card-header">
                          <img src={item.image} alt="" />
                          <div className="highlighter p-2">
                            <p className="p-1 px-3 text-white bg-primary rounded-5"><i class="bi bi-fire"></i>{item.tag}</p>
                           <div className="course-icons">
                             <div className="share">
                             <i class="bi bi-share-fill"></i>
                            </div>
                            <div className="fav">
                            <i class="bi bi-heart"></i>
                            </div>
                           </div>
                          </div>
                      </div>
                      <div className="course-card-body">
                      <ul className="list-group">
                                      <li className="list-group-item">
                                          <strong className="text-primary"><i class="bi bi-laptop fs-4"></i> Course</strong>
                                          <p>{item.name}</p>
                                      </li>
                                      <li className="list-group-item">
                                          <strong className="text-primary"><i class="bi bi-clock-history fs-4"></i> Duration</strong>
                                          <p>{item.duration}</p>
                                      </li>
                                      <li className="list-group-item">
                                          <strong className="text-primary"><i class="bi bi-person-workspace fs-4"></i> Trainer</strong>
                                          <p>{item.trainer}</p>
                                      </li>
                                      {/* <li className="list-group-item">
                                          <strong>Languages you learn</strong>
                                          <div className="lan-container">
                                              {item.languages.map((language, languageIndex) => (
                                                  <p className="lan" key={languageIndex}>{language}</p>
                                              ))}
                                          </div>
                                      </li> */}
                                      <li className="list-group-item p-0 course-btns">
                                        <button className="course-join">Join Course</button>
                                        <button className="course-whatsapp">Enquire</button>
                                      </li>
                                  </ul>
                      </div>
                      </div>
                  </div>
                ))}
              
            </div>
        </div>
    )
}

export default TrendingCourses;
