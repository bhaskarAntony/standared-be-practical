import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import '../styles/home.css'
import TabContent from 'react-bootstrap/TabContent';
import AllCourses from './AllCourses';
import TrendingCourses from './TrendingCourses';
import Councelling from './Councelling';
import Adwantage from './Adwantage';
import Testinomials from './Testinomials';
import Elite from './Elite';
import Feedback from './Feedback';
import Skills from './Skills';

const items = [
  {
    id: 1,
    name: 'Slide 1',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
  },
  {
    id: 2,
    name: 'Slide 1',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
  },
  {
    id: 1,
    name: 'Slide 1',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
  },
  {
    id: 1,
    name: 'Slide 1',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
  },
  {
    id: 1,
    name: 'Slide 1',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
  },
  {
    id: 1,
    name: 'Slide 1',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
  },
  // Add more items as needed
];

function Home() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [key, setKey] = useState('tab1'); // Initialize with the active tab key

    const [activeTab, setActiveTab] = useState('tab1'); // Initialize with the active tab key

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const handleCarouselHover = () => {
      setPaused(true);
    };
  
    const handleCarouselLeave = () => {
      setPaused(false);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!paused) {
          setIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
        }
      }, 3000); // Adjust the autoplay interval (in milliseconds) as needed
  
      return () => {
        clearInterval(interval);
      };
    }, [paused]);
  
    const numberOfSlides = 3; // Replace with the actual number of slides
  
    return (
        <div className="main-home">
       <section className="home container-fluid">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
            <div className="custom-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
           <div className="carousal-text">
            <h1 className="carousal-heading">
            High Paid Salaries & Continuous Career Growth
            </h1>
            <div className="carousel-body">
                <p className='carousel-body-text'>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>
           <div className="carousel-footer">
                <button className='join-btn p-3'>Join For Free</button>
                <button className='book-btn p-3'>Book Your Free Master Classes</button>
            </div>
           </div>
           
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousal-text">
            <h1 className="carousal-heading">
            High Paid Salaries & Continuous Career Growth
            </h1>
            <div className="carousel-body">
                <p className='carousel-body-text'>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>
            <div className="carousel-footer">
                <button className='join-btn p-3'>Join For Free</button>
                <button className='book-btn p-3'>Book Your Free Master Classes</button>
            </div>
           </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousal-text">
            <h1 className="carousal-heading">
            High Paid Salaries & Continuous Career Growth
            </h1>
            <div className="carousel-body">
                <p className='carousel-body-text'>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>
            <div className="carousel-footer">
                <button className='join-btn p-3'>Join For Free</button>
                <button className='book-btn p-3'>Book Your Free Master Classes</button>
            </div>
           </div>
          </Carousel.Item>
        </Carousel>
        <div className="custom-indicators">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`indicator ${index === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
            ></div>
          ))}
        </div>
      </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="home-right">
                    <img src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fhome-4%2Fmasthead%2F1.png&w=640&q=75" alt="" />
                </div>
            </div>
        </div>
        <div className="register-container-home">
        <div className="register align-items-center rounded-2">
          <div className="card p-2 rounded-2 py-3 border-0">
            <div className="card-header-text text-center w-100">
              <span className="fs-3 text-center">Register For Free Demo Session</span>
            </div>
          <div className="row mt-2">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor='email' className="form-label">Email Address</label>
                  <input type="email" placeholder='Email' className='form-control' />
                 </div> 
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group">
                  <label htmlFor='phone' className="form-label">Mobile Number</label>
                  <input type="number" placeholder='Phone' className='form-control' />
                 </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group form-group-last">
                  <label htmlFor="course" className="form-label">Select Course</label>
                  <select className='form-control'>
                    <option value="mern">MERN</option>
                    <option value="mern">Python Fullstack</option>
                    <option value="mern">Java Fullstack</option>
                    <option value="mern">Data Science</option>
                    <option value="mern">Cloud Computing</option>
                  </select>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 register-btn carousel-footer">
              <button className='join-btn p-3 mt-4'>Join Now</button>
            </div>
          </div>
          </div>
        </div>
        </div>
       </section>
       <div className="banner p-3 text-center margin-banner">
            <h3 className="banner-mini-text">Offer</h3>
            <h2 className="banner-big-text">We Offering Elite Batch For You...</h2>
        </div>
        <Elite/>

      
       <div className="banner p-3 text-center ">
            <h3 className="banner-mini-text">Courses</h3>
            <h2 className="banner-big-text">Your Choice Our Courses lore</h2>
        </div>
        <div className="full-screen-tabs">
      <div className="container-fluid">
     <div className="main-nav">
     <ul className="nav nav-tabs custom-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            <i class="bi bi-border-all"></i> All
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            <i class="bi bi-fire"></i> Trending Courses
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            Our Courses
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab4')}
          >
           Start Learning
          </a>
        </li>
      </ul>
      <button className='apply-btn'>Apply Now</button>
     </div>
      <div className="tab-content">
        {/* Content for each tab */}
        {activeTab === 'tab1' && <div>
            <AllCourses/>
            </div>}
        {activeTab === 'tab2' && 
        <div>
            <TrendingCourses/>
            
        </div>}
        {activeTab === 'tab3' &&
         <div>
            <AllCourses/>
        </div>}
        {activeTab === 'tab4' && 
        <div>
            This is the content for Tab 4
        </div>}
      </div>
    </div>
    </div>
    

        <div className="course-join-cards container-fluid p-4">
       <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
         <div className="join-card">
         <div className="row join-card-inner">
            <div className="col-6">
              <h5>BECOME A FULLSTACK DEVOLOPER</h5>
            </div>
            <div className="col-6">
             <button className="Know">Know More</button>
            </div>
          </div>
         </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
         <div className="join-card">
         <div className="row join-card-inner">
            <div className="col-6">
              <h5>BECOME A CLOUT ARCHITECT</h5>
            </div>
            <div className="col-6">
             <button className="Know">Know More</button>
            </div>
          </div>
         </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="join-card">
          <div className="row join-card-inner">
            <div className="col-6">
              <h5>BECOME A DATA SCIENTIST</h5>
            </div>
            <div className="col-6">
             <button className="Know">Know More</button>
            </div>
          </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="join-card">
          <div className="row join-card-inner">
            <div className="col-6">
              <h5>BECOME A DEVOPS ENGINEER</h5>
            </div>
            <div className="col-6">
             <button className="Know">Know More</button>
            </div>
          </div>
          </div>
        </div>
       </div>
       </div>

    <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Training</h3>
            <h2 className="banner-big-text">Mode Of Training</h2>
        </div>

        <div className="training container-fluid overflow-hidden">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="training-card training-card1">
                        <div className="training-card-header text-center mb-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/5361/5361774.png" alt="" />
                        </div>
                        <div className="training-card-body">
                            <h3>Classroom training</h3>
                            <p className="mt-3">In-house training / classroom training is livelier with our excellent infrastructure and modern facilities and face to face interaction with our trainers.</p>
                        </div>
                        <div className="training-card-footer">
                            <button className="bg-white rounded-0 fs-5 w-100 p-1 border-0">Join Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="training-card training-card2">
                    <div className="training-card-header text-center mb-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/3214/3214781.png" alt="" />
                        </div>
                        <div className="training-card-body">
                            <h3>Online Training</h3>
                            <p className="mt-3">Online training lets you compete your training from any place in the world. Learn your desired course while sitting in your home</p>
                        </div>
                        <div className="training-card-footer">
                            <button className="bg-white rounded-0 fs-5 w-100 p-1 border-0">Join Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="training-card training-card3">
                    <div className="training-card-header text-center mb-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/2103/2103862.png" alt="" />
                        </div>
                        <div className="training-card-body">
                            <h3>Corporate Training</h3>
                            <p className="mt-3">Our trainers provide corporate training, so you can stay up to date with the latest developments in your field.</p>
                        </div>
                        <div className="training-card-footer">
                            <button className="bg-white rounded-0 fs-5 w-100 p-1 border-0">Join Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="training-card training-card4">
                    <div className="training-card-header text-center mb-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/4365/4365377.png" alt="" />
                        </div>
                        <div className="training-card-body">
                            <h3>Hybrid Training</h3>
                            <p className="mt-3">We provide hybrid classes, where students can attend classes online or offline. It is great for students with a busy schedule.</p>
                        </div>
                        <div className="training-card-footer">
                            <button className="bg-white rounded-0 fs-5 w-100 p-1 border-0">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Councelling</h3>
            <h2 className="banner-big-text">Training process and deployment</h2>
        </div>
        <Councelling/>
        <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Adwantage</h3>
            <h2 className="banner-big-text">TRAINING ADVANTAGE @BE-PRACTICAL</h2>
        </div>
        <Adwantage/>
        <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">Testinomials</h3>
            <h2 className="banner-big-text">Meet Our Students</h2>
        </div>
       <div className="bg-light container-fluid overflow-hidden">
       <Feedback/>
       </div>

       <div className="banner p-3 text-center">
            <h3 className="banner-mini-text">@Be Practical</h3>
            <h2 className="banner-big-text">Why You Choose Us?</h2>
        </div>
        <Skills/>
        
       </div>
  )
}

export default Home
