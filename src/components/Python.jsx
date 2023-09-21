import React from 'react'
import '../styles/mern.css'

function Python() {
  return (
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
                <h1 className='text-white'>Complete <span className='text-primary'>Python Fullstack</span> Devolopment Course</h1>
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
                    <label htmlFor="name" className="form-label">Name</label>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Enter Name</label>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Email</label>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Mobile Number</label>
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
  )
}

export default Python
