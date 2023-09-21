import React from 'react'
import '../styles/elite.css'

function Elite() {
  return (
    <div className="container-black container-fluid">
      <div className='elite-section'>

      {/* <div className="blur">

      </div> */}
      <div className="elite-text text-center text-white">
        <h1>Join our Elite Program, <br />Get 50% Refund if not Placed</h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi neque, <br /> sed sint obcaecati minima dolor voluptatem,  <br />eius libero impedit nisi quos tempore excepturi sunt placeat consectetur, in amet. Voluptas.</p>
       
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="elite-card elite-c1" data-aos="zoom-out-up">
            <i class="bi bi-cash-stack"></i>
              <h4 className='elite-card-text-main'>Refund</h4>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="elite-card elite-c2" data-aos="zoom-out-up">
            <i class="bi bi-code-slash"></i>
              <h4 className='elite-card-text-main'>DSA</h4>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="elite-card  elite-c3" data-aos="zoom-out-up">
            <i class="bi bi-stars"></i>
              <h4 className='elite-card-text-main'>Softskills</h4>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="elite-card  elite-c4" data-aos="zoom-out-up">
            <i class="bi bi-person-check-fill"></i>
              <h4 className='elite-card-text-main'>Internship</h4>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="elite-card  elite-c5" data-aos="zoom-out-up">
            <i class="bi bi-building-fill-up"></i>
              <h4 className='elite-card-text-main'>Placemnet Assistant</h4>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="elite-card  elite-c6" data-aos="zoom-out-up">
            <i class="bi bi-building-fill-up"></i>
              <h4 className='elite-card-text-main'>Add-On's</h4>
            </div>
          </div>
        </div>
        <a href="#" className="btn bg-white mt-4 m-2">Join Now <i class="bi bi-send-fill"></i></a>
        <a href="#" className="btn bg-white mt-4 m-2">Book Your Free Master classes<i class="bi bi-send-fill"></i></a>
      </div>
      {/* <div className="svg"></div> */}
    </div>
    </div>
  )
}

export default Elite
