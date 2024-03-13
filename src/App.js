import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
 import Profile from "./pages/users/Profile";
import Dashboard from "./pages/users/Dashboard";
import CustomNav from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";

import UserProvider from "./context/UserProvider";
import AdminDashboard from "./pages/admin/AdminDashboard";




import Home from './Project1/Home'

import Footer from './Project1/footer'
import About from './Project1/About'
import Blog from './Project1/Blog'
import Course from './Project1/Course'
import Contact from './Project1/Contact'
// import Profile from './Project1/Profile'
import CourseInner from './Project1/Courses/CourseInner'
import CourseInner1 from './Project1/Courses/CourseInner1'
import Post from './Project1/Post/Post'
import Post1 from './Project1/Post/Post1'
import Post2 from './Project1/Post/Post2'
import CourseInner2 from './Project1/Courses/CourseInner2'
import CourseInner3 from './Project1/Courses/CourseInner3'
import CourseInner4 from './Project1/Courses/CourseInner4'
import CourseInner5 from './Project1/Courses/CourseInner5'
import CourseInner6 from './Project1/Courses/CourseInner6'
import CourseInner7 from './Project1/Courses/CourseInner7'
import CourseInner8 from './Project1/Courses/CourseInner8'
import CourseInner9 from './Project1/Courses/CourseInner9'
import CourseInner10 from './Project1/Courses/CourseInner10'
import CourseInner11 from './Project1/Courses/CourseInner11'
import CourseInner12 from './Project1/Courses/CourseInner12'
import CourseInner13 from './Project1/Courses/CourseInner13'
import CourseInner14 from './Project1/Courses/CourseInner14'
import CourseInner15 from './Project1/Courses/CourseInner17'
import CourseInner16 from './Project1/Courses/CourseInner15'
import CourseInner17 from './Project1/Courses/CourseInner16'
import CourseInner18 from './Project1/Courses/CourseInner18'
import CourseInner19 from './Project1/Courses/CourseInner19'
import CourseInner20 from './Project1/Courses/CourseInner20'
import Post4 from './Project1/Post/Post4'
import Post5 from './Project1/Post/Post5'
import Post6 from './Project1/Post/Post6'
import Post7 from './Project1/Post/Post7'
import Post8 from './Project1/Post/Post8'
import Post9 from './Project1/Post/Post9'
import Post10 from './Project1/Post/Post10'
import Post11 from './Project1/Post/Post11'
import Post12 from './Project1/Post/Post12'
import Post13 from './Project1/Post/Post13'
import Post14 from './Project1/Post/Post14'
import Post15 from './Project1/Post/Post15'
import Post16 from './Project1/Post/Post16'
import Post17 from './Project1/Post/Post17'
import Post18 from './Project1/Post/Post18'
import Post19 from './Project1/Post/Post19'
import Post20 from './Project1/Post/Post20'
import Post3 from './Project1/Post/Post3'

function App() {
  return (
    //setting up routes
    <UserProvider>
      <BrowserRouter>
        <ToastContainer pauseOnHover={false} />
        <CustomNav />

        <Routes>
          
          <Route path="/about" element={<About />} />

         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/users" element={<Dashboard />}>
            <Route path="profile/:userId" element={<Profile />} />
          </Route>

          <Route path="/admin" element={<AdminDashboard />}>
          <Route path="home" element={<AdminDashboard />} />

          
          </Route>


 <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/blog' element={<Blog/>}/>
    <Route exact path='/course' element={<Course/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/course0' element={<CourseInner/>}/>
    <Route exact path='/course1' element={<CourseInner1/>}/>
    <Route exact path='/course2' element={<CourseInner2/>}/>
    <Route exact path='/course3' element={<CourseInner3/>}/>
    <Route exact path='/course4' element={<CourseInner4/>}/>
    <Route exact path='/course5' element={<CourseInner5/>}/>
    <Route exact path='/course6' element={<CourseInner6/>}/>
    <Route exact path='/course7' element={<CourseInner7/>}/>
    <Route exact path='/course8' element={<CourseInner8/>}/>
    <Route exact path='/course9' element={<CourseInner9/>}/>
    <Route exact path='/course10' element={<CourseInner10/>}/>
    <Route exact path='/course11' element={<CourseInner11/>}/>
    <Route exact path='/course12' element={<CourseInner12/>}/>
    <Route exact path='/course13' element={<CourseInner13/>}/>
    <Route exact path='/course14' element={<CourseInner14/>}/>
    <Route exact path='/course15' element={<CourseInner15/>}/>
    <Route exact path='/course16' element={<CourseInner16/>}/>
    <Route exact path='/course17' element={<CourseInner17/>}/>
    <Route exact path='/course18' element={<CourseInner18/>}/>
    <Route exact path='/course19' element={<CourseInner19/>}/>
    <Route exact path='/course20' element={<CourseInner20/>}/>
    
    <Route exact path='/post' element={<Post/>}/>
    <Route exact path='/post1' element={<Post1/>}/>
    <Route exact path='/post2' element={<Post2/>}/>
    <Route exact path='/post3' element={<Post3/>}/>
    <Route exact path='/post4' element={<Post4/>}/>
    <Route exact path='/post5' element={<Post5/>}/>
    <Route exact path='/post6' element={<Post6/>}/>
    <Route exact path='/post7' element={<Post7/>}/>
    <Route exact path='/post8' element={<Post8/>}/>
    <Route exact path='/post9' element={<Post9/>}/>
    <Route exact path='/post10' element={<Post10/>}/>
    <Route exact path='/post11' element={<Post11/>}/>
    <Route exact path='/post12' element={<Post12/>}/>
    <Route exact path='/post13' element={<Post13/>}/>
    <Route exact path='/post14' element={<Post14/>}/>
    <Route exact path='/post15' element={<Post15/>}/>
    <Route exact path='/post16' element={<Post16/>}/>
    <Route exact path='/post17' element={<Post17/>}/>
    <Route exact path='/post18' element={<Post18/>}/>
    <Route exact path='/post19' element={<Post19/>}/>
    <Route exact path='/post20' element={<Post20/>}/>
  
    
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
