import React from 'react';
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
import { Link } from 'react-router-dom';


const Blog = () => {
 
  return (
    <div>
      <section id="about-home">
        <h2>Blog /</h2>
      </section>

      <section id="blog-container">
        <div className="blogs">

        <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img} alt="" />
            <h3>Learn Digital Assurance & Testing In The Easiest Way</h3>
            <p>Digital Assurance & Testing seamlessly blends development and operations, creating a streamlined and efficient software development lifecycle. In the interconnected realm of Digital Assurance & . . . .</p>
            <Link to="/post">Read More</Link>
          </div>

          <div className="post">
          <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img2} alt="" />
          <h3>Mastering Performance Test Engineering in Modern Software Development</h3>
          <p> Performance testing is an integral part of ensuring software reliability, scalability, and speed. In the fast-paced realm of modern software development, mastering performance test engineering is essential for delivering high-quality applications. . . . .</p>
          <Link to="/post1">Read More</Link>
        </div>

          <div className="post">
          <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img3} alt="" />
          <h3>Reliability Engineering and Automation: Ensuring Resilient Systems</h3>
          <p>Reliability engineering is the backbone of resilient systems. In the digital landscape, where downtime can be costly, reliability engineers focus on creating systems that remain robust, available, and performant under diverse conditions.
          . . . .</p>
          <Link to="/post2">Read More</Link>
        </div>

          <div className="post">
          <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img4} alt="" />
          <h3>Exploring Automation Tools & Accelerators for Efficient Workflows</h3>
          <p>Automation tools and accelerators are the backbone of efficient workflows in modern tech environments. This course delves into a spectrum of automation tools designed to streamline processes, enhance productivity, and accelerate software development lifecycles.
          . . . .</p>
          <Link to="/post3">Read More</Link>
        </div>

          <div className="post">
          <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img5} alt="" />
          <h3>Python Everywhere: Leveraging the Power of Python Across Domains</h3>
          <p>Python has emerged as a versatile and powerful programming language, finding its application across various domains, from web development and data science to automation and artificial intelligence.
          . . . .</p>
          <Link to="/post4">Read More</Link>
        </div>

          <div className="post">
          <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3>Clean & Secure Code Development: Best Practices for Reliable Software</h3>
          <p>Clean and secure code is the foundation of reliable and maintainable software systems. This course delvers into the best practices and principles essential for crafting code that is not only functional but also clean, secure, and easily maintainable.
          . . . .</p>
          <Link to="/post5">Read More</Link>
        </div>

          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img7} alt="" />
            <h3>Learn Everything In Devops- Dev{'{X}'}Ops In The Easiest Way</h3>
            <p>If you're eager to dive into the world of Digital Assurance & Testing right away, the ideal choice is the "Everything In Digital Assurance & Testing - Dev{'{X}'}Ops In The Easiest Way" course. . . . .</p>
            <Link to="/post6">Read More</Link>
          </div>


          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img8} alt="" />
            <h3>Security Engineering & Assurance: Building Trustworthy Systems</h3>
            <p>Security engineering and assurance are integral components in developing and maintaining trustworthy and resilient systems. This course explores the principles, methodologies, and practices essential for ensuring robust security measures across software and infrastructure.
            . . . .</p>
            <Link to="/post7">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://media.istockphoto.com/id/1418476287/photo/businessman-analyzing-companys-financial-balance-sheet-working-with-digital-augmented-reality.webp?b=1&s=612x612&w=0&k=20&c=DfSCIoYtn5f7WcEwsZR-CtA9tY5dEA45rKs60yIKjJU=" alt="" />
            <h3>Privacy Engineering & Assurance: Safeguarding User Data</h3>
            <p>Privacy engineering and assurance are crucial in developing systems that respect user privacy and comply with privacy regulations. This course delves into the methodologies, principles, and practices essential for ensuring robust privacy measures across software and data handling processes.
            . . . .</p>
            <Link to="/post8">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img10} alt="" />
            <h3>Cloud Security Engineering: Securing Distributed Infrastructure</h3>
            <p>Cloud security engineering is critical in safeguarding distributed infrastructure and data hosted in cloud environments. This course explores the principles, strategies, and best practices essential for ensuring robust security in cloud-based systems.
            . . . .</p>
            <Link to="/post9">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h3>Accessibility Design & Testing: Building Inclusive Experiences</h3>
            <p>Accessibility design and testing are crucial in ensuring that digital products and services are inclusive and accessible to all users, including those with disabilities. This course explores the principles, methodologies, and best practices essential for creating accessible user interfaces.
            . . . .</p>
            <Link to="/post10">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://www.apexon.com/wp-content/themes/supernova/img/digital-assurance-tier1-img.jpg" alt="" />
            <h3>Microservices & API Testing: Ensuring Functional & Reliable Servicesy</h3>
            <p> Microservices architecture has transformed software development, and robust API testing is vital for ensuring the functionality and reliability of these distributed services. This course explores the methodologies, strategies, and tools essential for testing microservices and APIs effectively.
            . . . .</p>
            <Link to="/post11">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img13} alt="" />
            <h3>Mobile Application Testing: Ensuring Quality & Performance</h3>
            <p> Mobile application testing is essential to ensure the quality, functionality, and performance of mobile apps across various devices and platforms. This course explores the methodologies, tools, and best practices essential for comprehensive mobile app testing.
            . . . .</p>
            <Link to="/post12">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h3>IT Support & Service Management: Ensuring Seamless Operations</h3>
            <p>IT support and service management are critical for maintaining seamless operations within organizations. This course explores the principles, methodologies, and best practices essential for efficient IT support and service delivery.
            . . . .</p>
            <Link to="/post13">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img15} alt="" />
            <h3>Quality Security Audits & Assessments: Ensuring Robust Security Measures</h3>
            <p>Quality security audits and assessments are pivotal in ensuring that an organization's security measures are comprehensive and effective. This course delves into the methodologies, techniques, and best practices essential for conducting quality security audits and assessments.
            . . . .</p>
            <Link to="/post14">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src={img16} alt="" />
            <h3>Cyber Laws, Privacy Legislation & Compliance: Navigating Legal Frameworks</h3>
            <p> Understanding cyber laws, privacy legislation, and compliance standards is essential for businesses to protect data and ensure legal adherence. This course explores the landscape of cyber laws, privacy regulations, and compliance requirements.
            . . . .</p>
            <Link to="/post15">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://media.istockphoto.com/id/1479421285/photo/engineer-working-on-laptop-with-virtual-screen-it-operations-high-software-quality-and.webp?b=1&s=612x612&w=0&k=20&c=tjMW5NJn0N3tkcfg7Vi3-kypvrZ-GW8xdHHcBIeK22s=" alt="" />
            <h3>Continuous Testing with DevOps: Ensuring Quality in Continuous Delivery</h3>
            <p>Continuous testing is integral to the DevOps methodology, ensuring that quality is maintained throughout the software development lifecycle. This course explores the strategies, tools, and best practices essential for implementing continuous testing within a DevOps framework.
            . . . .</p>
            <Link to="/post16">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Technical Content Writing: Communicating Complexity with Clarity</h3>
            <p>Technical content writing involves conveying complex information in a clear and understandable manner. This course explores the strategies, techniques, and best practices essential for crafting effective technical content across various domains.
            . . . .</p>
            <Link to="/post17">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://cdn.pixabay.com/photo/2020/02/19/07/48/web-4861605_1280.jpg"  alt="" />
            <h3>Testing AI-based Systems & Automation: Ensuring Reliability in AI</h3>
            <p>Testing AI-based systems presents unique challenges, and automation is crucial for ensuring their reliability and performance. This course explores the strategies, methodologies, and tools essential for testing AI-driven systems and implementing automation in AI testing.
            . . . .</p>
            <Link to="/post18">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://cdn.pixabay.com/photo/2018/05/16/18/16/cloud-3406627_1280.jpg" alt="" />
            <h3>Cloud Auditing and Assessments: Ensuring Security and Compliance in Cloud Environments</h3>
            <p>Cloud auditing and assessments are vital for ensuring security, compliance, and governance in cloud environments. This course explores the methodologies, tools, and best practices essential for conducting audits and assessments in cloud infrastructures.
            . . . .</p>
            <Link to="/post19">Read More</Link>
          </div>

          
          <div className="post">
            <img style={{ borderRadius: " 12px", boxShadow: "3px 10px 5px 3px grey", marginBottom: "25px" }} src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h3>Digital Literacy & Communication Skills: Navigating the Digital Landscape</h3>
            <p>Digital literacy and communication skills are essential in today's tech-driven world. This course explores the fundamentals of digital literacy and effective communication in digital environments, empowering individuals to navigate the digital landscape proficiently.
            . . . .</p>
            <Link to="/post20">Read More</Link>
          </div>




        </div>
        <div className="cate" >
          <h2>Categories</h2>
          <hr />
          <Link  to="/course6">Everything In Devops- Dev{'{X}'}Ops</Link>
          <hr />
          <Link  to="/course0">Digital Assurance & Testing</Link>
          <hr />
          <Link  to="/course1">Performance Test Engineering</Link>
          <hr />
          <Link  to="/course3">Automation Tools & Accelerators</Link>
          <hr />
          <Link to="/course2">Reliability Engineering and Automation</Link>
          <hr />
          <Link  to="/course4">Python Everywhere</Link>
          
        </div>
      </section>
    </div>
  );
};

export default Blog;
