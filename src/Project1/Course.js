import React from 'react'
import StarRating from './StarRating'
import img from '../Project1/courseimg/1.jpg'
import img2 from '../Project1/courseimg/2.png'
import img3 from '../Project1/courseimg/3.jpg'
import img4 from '../Project1/courseimg/4.jpg'
import img5 from '../Project1/courseimg/5.png'
import img7 from '../Project1/courseimg/7.png'
import img8 from '../Project1/courseimg/8.png'
import img10 from '../Project1/courseimg/10.png'
import img13 from '../Project1/courseimg/13.png'
import img15 from '../Project1/courseimg/15.png'
import img16 from '../Project1/courseimg/16.png'
import { Link } from 'react-router-dom'





const Course = () => {
  return (
    <div><section id="about-home">
    <h2>Courses /</h2>
</section>

<section id="courses">
    <h1>Our Popular Courses</h1>
    <p className='lead'>Embark on a transformative journey with our expert-led courses, unlocking practical skills and comprehensive knowledge spanning coding, marketing, and personal development realms.
    </p>
    <div className="course-box">






    <div className="courses">
    <Link to="/course15"><img  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>  </Link>
   <div className="details">
       <span>Update 21/8/23</span>
       <h5>Technical Content Writing</h5>
        <div class="star">
         <StarRating totalStars={5} />
             <span>(18K)</span>
         </div>
   </div>
   <div   className="cost">
       ₹19.0
   </div>
</div>

      

        <div  className="courses">
        <Link to="/course1">   <img  src={img2} alt=""/></Link>

            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Performance Test Engineering</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(986)</span>
                  </div>
            </div>
            <div className="cost">
                ₹0.00
            </div>
        </div>

        <div  className="courses">
            <Link to="/course2"><img src={img3} alt=""/> </Link>

            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Reliability Engineering and Automation</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(54K)</span>
                  </div>
            </div>
            <div  className="cost">
                ₹0.00
            </div>
        </div>
        <div className="courses">
             <Link to="/course3"><img src={img4} alt=""/></Link>

            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Automation Tools & Accelerators</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(23K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹0.00
            </div>
        </div>

       

        <div className="courses">
            <Link to="/course4"> <img src={img5} alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Python Everywhere</h5>
                <div class="star">
                <StarRating totalStars={5} />
                    <span>(38K)</span>
                </div>
            </div>
            <div   className="cost">
                ₹0.00
            </div>
        </div>

        <div className="courses">
        <Link to="/course5">      <img src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Clean & Secure Code Development</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(5K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹0.00
            </div>
        </div>
        <div className="courses">
            <Link to="/course6"> <img src={img7} alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Everything In Devops- Dev{'{X}'}Ops</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(10K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹40.0
            </div>
        </div>

        <div className="courses">
        <Link to="/course7">  <img  src={img8} alt=""/>  </Link>
            <div className="details">
                <span>Update 21/8/23</span>
                <h5>Security Engineering & Assurance</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(18K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹19.0
            </div>
        </div>

        <div className="courses">
        <Link to="/course8">  <img  src="https://media.istockphoto.com/id/1418476287/photo/businessman-analyzing-companys-financial-balance-sheet-working-with-digital-augmented-reality.webp?b=1&s=612x612&w=0&k=20&c=DfSCIoYtn5f7WcEwsZR-CtA9tY5dEA45rKs60yIKjJU=" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Privacy Engineering & Assurance</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(3K)</span>
                  </div>
            </div>
            <div style={{marginBottom :" 10px  "}} className="cost">
                ₹39.0
            </div>
        </div>

                <div  className="courses">
            <Link to="/course9"><img src={img10} alt=""/> </Link>

            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Cloud Security Engineering</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(54K)</span>
                  </div>
            </div>
            <div  className="cost">
                ₹0.00
            </div>
        </div>
        <div className="courses">
             <Link to="/course10"><img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>  </Link>

            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Accessibility Design & Testing</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(23K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹0.00
            </div>
        </div>

        <div   className="courses">
             <Link to="/course11"><img src="https://www.apexon.com/wp-content/themes/supernova/img/digital-assurance-tier1-img.jpg" alt=""/>  </Link>

            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Microservices & API Testing</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(13K)</span>
                  </div>
            </div>
            <div   className="cost">
              ₹0.00
            </div>
        </div>

        <div className="courses">
            <Link to="/course12"> <img src={img13} alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Mobile Application Testing</h5>
                <div class="star">
                <StarRating totalStars={5} />
                    <span>(38K)</span>
                </div>
            </div>
            <div   className="cost">
                ₹0.00
            </div>
        </div>

        <div className="courses">
            <Link to="/course13"> <img src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>IT Support & Service Management</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(5K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹0.00
            </div>
        </div>
        <div className="courses">
            <Link to="/course14"> <img src={img15} alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Quality Security Audits & Assessments</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(10K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹40.0
            </div>
        </div>
        <div className="courses">
             <Link to="/course16"><img src={img16} alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>CyberLaws, Privacy Legislation & Compliance</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(10K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹40.0
            </div>
        </div>

        <div className="courses">
             <Link to="/course17"><img  src="https://media.istockphoto.com/id/1479421285/photo/engineer-working-on-laptop-with-virtual-screen-it-operations-high-software-quality-and.webp?b=1&s=612x612&w=0&k=20&c=tjMW5NJn0N3tkcfg7Vi3-kypvrZ-GW8xdHHcBIeK22s=" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/8/23</span>
                <h5>Continous Testing with DevOps</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(18K)</span>
                  </div>
            </div>
            <div   className="cost">
                ₹19.0
            </div>
        </div>
       

        <div className="courses">
        <Link to="/course0"><img  src={img} alt=""/></Link>
        <div className="details">
            <span>Update 21/9/23</span>
            <h5>Digital Assurance & Testing</h5>
             <div class="star">
              <StarRating totalStars={5} />
                  <span>(231K)</span>
              </div>
        </div>
        <div style={{marginBottom: "20px"}} className="cost">
           ₹0.00
        </div>
    </div>


        <div className="courses">
        <Link to="/course18">  <img src="https://cdn.pixabay.com/photo/2020/02/19/07/48/web-4861605_1280.jpg" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Testing AI-based Systems & Automation</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(3K)</span>
                  </div>
            </div>
            <div style={{marginBottom :" 10px  "}} className="cost">
                ₹39.0
            </div>
        </div>

        <div className="courses">
            <Link to="/course19"> <img src="https://cdn.pixabay.com/photo/2018/05/16/18/16/cloud-3406627_1280.jpg" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Cloud Auditing and Assessments</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(3K)</span>
                  </div>
            </div>
            <div style={{marginBottom :" 10px  "}} className="cost">
                ₹39.0
            </div>
        </div>
        <div className="courses">
            <Link to="/course20"> <img src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>  </Link>
            <div className="details">
                <span>Update 21/9/23</span>
                <h5>Digital Literacy & Communcatioin Skills</h5>
                 <div class="star">
                  <StarRating totalStars={5} />
                      <span>(3K)</span>
                  </div>
            </div>
            <div style={{marginBottom :" 10px  "}} className="cost">
                ₹39.0
            </div>
        </div>
    </div>
</section>

</div>
  )
}

export default Course