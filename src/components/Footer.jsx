import React from 'react'
import '../styles/footer.css'   
function Footer() {
  return (
    <>
    <div className="footer-wave ">
    </div>
    <section className="footer_container container-fluid">
    <div className="row">
        <div className="col-12 cl-md-12 col-lg-3 ">
           <div className="left">
           <img src="https://be-practical.com/images/Be-logo.png" alt="" />
            <p>
                Since its establishment in 2012, Be Practical Tech Solutions is training predominantly in IT courses. It has pioneered as a diversified entrepreneurship tapping into the necessities of the internet market in India, with its in-depth understanding of customers and companies
            </p>
           </div>

        </div>
        <div className="col-12 cl-md-12 col-lg-6 ">
           <div className="row">
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>category</h2>
                        <ul>
                            <li><a href="#">Mean</a></li>
                            <li><a href="#">Mern</a></li>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">Dotnet</a></li>
                            <li><a href="#">Software testing</a></li>
                            <li><a href="#">Cloud Computing</a></li>
                            <li><a href="#">Cloud Ops</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Data Scince</a></li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>Quick Search</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Event</a></li>
                            
                        </ul>
                    </div>


                </div>
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>For Companies</h2>
                        <ul>
                            <li><a href="#">Corporate Training</a></li>
                            <li><a href="#">HR services</a></li>
                            <li><a href="#">Hire trained graduates</a></li>
                        
                            
                        </ul>
                    </div>

                </div>
           </div>
            
        </div>
        <div className="col-12 cl-md-12 col-lg-3 ">

            <div className="right">
                <h2 className='fs-4 text-left'>
                    Get in Touch
                </h2>
               <ul>
                   <li><a>info@be-practicle.com</a></li>
                   <li><a>+91-9242079779</a></li>
                   <li><a>
                   <address>#737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</address></a></li>
                  
               </ul> 
            </div>
            <div className="icons">
                <div>
                    <i class="bi bi-facebook"></i>
                </div>
                <div>
                    <i class="bi bi-twitter"></i>
                </div>
                <div>
                    <i class="bi bi-youtube"></i>
                </div>
                <div>
                    <i class="bi bi-linkedin"></i>
                </div>
                <div>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            
        </div>
    </div>
</section>
</>


  )
}

export default Footer
