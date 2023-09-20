import React from 'react'
import '../styles/testinomials.css'
import Testinomialdata from './Testinomialdata'

function Testinomials() {
    var allTestinomials = [
        {
            profile:"https://pyxis.nymag.com/v1/imgs/74e/daf/1293f7c0ebc1dda4f28d2ed0db8cb746a8-10-tiffanytrump.rsquare.w700.jpg",
            name:"Bhaskar",
            heading:"I learned all things in this institute",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laudantium optio placeat mollitia hic molestiae, excepturi delectus quibusdam cumque eaque veritatis eius quod. Dolor, magnam necessitatibus nulla recusandae ipsam inventore.",
            position:"student"
        },
        {
            profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
            name:"Bhaskar",
            heading:"I learned all things in this institute",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laudantium optio placeat mollitia hic molestiae, excepturi delectus quibusdam cumque eaque veritatis eius quod. Dolor, magnam necessitatibus nulla recusandae ipsam inventore.",
            position:"student"
        }
    ]
  return (
    <div className='container-fluid testinomials'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="testinomial-image-container">
                <img src="https://html.ditsolution.net/techno/assets/images/testi/test1.png" alt="" />
                <div className="rating-badge-container">
                  <div className="rating-badge"></div>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="testinomial-text-container p-3">
                <span className="fs-5 bg-primary text-white p-2 rounded-2">Meet Our Students</span>
                <h1 className="mt-3 text-white">Techno all Over World 23M+
Satisfied Customers</h1>
<Testinomialdata items={allTestinomials}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testinomials
