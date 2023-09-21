import React, { useState } from 'react'
import '../styles/mern.css'
import Adwantage from './Adwantage';
import Testinomials from './Testinomials';

function Mern() {
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState('tab1'); // Initialize with the active tab key

    const [activeTab, setActiveTab] = useState('tab1'); // Initialize with the active tab key

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    <>
    <div className='course-top container-fluid'>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
           <div className="course-page-text">
           <div className="tag-container">
               <p className="tag-green rounded-5 p-1 px-2 bg-warning">Trending</p> 
               <p className="tag-red rounded-5 p-1 px-2 bg-danger">Best Course</p>
               <p className="tag-blue rounded-5 p-1 px-2 bg-primary">Popular</p>
            </div>
            <div className="course-heading">
                <h1 className='text-white'>Complete <span className='text-primary'>MERN Fullstack</span> Devolopment Course</h1>
            </div>
            <p className="course-description text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi non quod.</p>
            <div className="row course-text-footer">
                <div className="col-12 col-md-4 col-lg-4">
                <div className="rating">
                    <p className='text-white'>rating</p>
                    <p className="rating-text">4.5</p>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="enrolled">
             
                    <p className="text-white"><i class="bi bi-people-fill fs-3"></i> 1000+ enrolled on this course</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="updated">
                    
                    <p className="text-white"><i class="bi bi-clock fs-3"></i> Last updated 08/2023</p>
                    </div>
                </div>
            </div>
            <div className="carousel-footer">
                <button className='join-btn p-3'>Join For Free</button>
                <button className='book-btn p-3'>Book Your Free Master Classes</button>
            </div>
           </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="course-register bg-white rounded-4 p-3">
                <div className="register-header text-center mb-3">
                <img src="https://cdn-icons-png.flaticon.com/128/4662/4662810.png" alt="" />
                </div>
                <form>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label"><i class="bi bi-person fs-4"></i> Name</label>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Enter Name</label>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label"> <i class="bi bi-envelope fs-4"></i> Email</label>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label"> <i class="bi bi-telephone fs-4"></i> Mobile Number</label>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Enter Mobile Number</label>
                    </div>
                </div>
                <div className="form-group mb-3 carousel-footer">
                <button className='join-btn w-100 p-3 fs-5'><i class="bi bi-r-circle-fill"></i> Register For Free</button>
                </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Course</h3>
            <h2 className="banner-big-text">MERN Fullstack Devolopment Course</h2>
        </div>
      <div className="overview container-fluid">
        <div className="row">
        <div className="col-12 col-md-4 col-lg-4">
               <div className="single-course-card p-2 rounded-4">
                    <div className="single-course-card-top">
                        <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className="single-course-card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong className="text-primary">Instructor</strong>
                                <p>Bhaskar Antony</p>
                            </li>
                              <li className="list-group-item">
                                <strong className="text-primary">Duration</strong>
                                <p>4.5 Months</p>
                            </li>
                            <li className="list-group-item">
                                <strong className="text-primary">Enrolled</strong>
                                <p>200+</p>
                            </li>
                            <li className="list-group-item carousel-footer">
                              <button className="join-btn p-3 fs-4 w-100">Enroll Now</button>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
            <div className="full-screen-tabs">
      <div className="container-fluid">
      <ul className="nav nav-tabs custom-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
             Course
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab4')}
          >
          Languages
          </a>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 'tab2' && 
        <div>
          <h4>Course Description</h4>
        <p>MERN full-stack development training is a comprehensive set of technologies that can be used to build web applications. This training teaches you how to use MongoDB, ExpressJS, AngularJS, and NodeJS, all of which are powerful tools for building web applications.</p>
        <h3>Certification</h3>
        <p>This course is tailored specifically for developers interested in building web applications using the Node.js and Express.js platforms. Beginning with an introduction to these languages and technologies, you'll learn how to develop and understand web applications using JavaScript. Further, you'll learn about the MERN stack, which will equip you with the skills you need to master front-end development. Additionally, you'll learn about Mongo DB, which is a powerful NoSQL database.</p>
        </div>}
        {activeTab === 'tab3' &&
         <div>
            j
        </div>}
        {activeTab === 'tab4' && 
        <div>
            This is the content for Tab 4
        </div>}
      </div>
    </div>
    </div>
            </div>
           
        </div>
      </div>
      <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Adwantage</h3>
            <h2 className="banner-big-text">Your Choice Our Courses lore</h2>
        </div>
        <Adwantage/>
        <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Testinomials</h3>
            <h2 className="banner-big-text">What Students Says About This Course?</h2>
        </div>
        <Testinomials/>
    </>
  )
}

export default Mern
