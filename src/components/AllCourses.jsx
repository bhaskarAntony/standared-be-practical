import React, { useEffect } from 'react';
import '../styles/allcourses.css'
import AOS from 'aos';

var courses = [
    {
        name: "MERN Fullstack",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Java Fullstack",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Python Fullstack",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Python Fullstack",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        icon: "",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

function AllCourses() {
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
                      </div>
                      <div className="course-card-body">
                      <ul className="list-group">
                                      <li className="list-group-item">
                                          <strong>Course</strong>
                                          <p>{item.name}</p>
                                      </li>
                                      <li className="list-group-item">
                                          <strong>Duration</strong>
                                          <p>{item.duration}</p>
                                      </li>
                                      <li className="list-group-item">
                                          <strong>Trainer</strong>
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
                                        <button className="course-join"><i class="bi bi-send-fill"></i> Join Now</button>
                                        <button className="course-whatsapp"><i class="bi bi-whatsapp"></i> Enquire</button>
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

export default AllCourses;
