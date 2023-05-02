import React, {useState} from 'react';
import './Home.css';
import landingVector from "../../assets/landing-vector.svg";
import Header from '../partials/Header/Header';
import { Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../reduxSlices/authSlice';
import LoginModal from '../partials/LoginModal/LoginModal';
import FooterNav from '../partials/FooterNav/FooterNav';
const Home = () => {
  const userData = useSelector(selectUserData);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(prevState=>!prevState);
  return (
    <div className="landing"> 
      <Header/>
      <section id="hero">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div>
                <h2>Enhance your learning with</h2>
                <h1><strong>Learner's Space</strong></h1>
                <p>Brings the benefits of paperless sharing, assessment<br/> and digital collaboration to classrooms.</p>
                  {
                    (userData.token) ? 
                      (<Link to="classes" className="btn-get-started scrollto">Get Started</Link>) : 
                      (<button className="btn-get-started scrollto" onClick={() => setShow(true)}>Get Started</button>)
                  }
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-ani0 FloatImg" data-aos="fade-left">
              <img src={landingVector} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    
           <div>
           <FooterNav/>  
           <LoginModal isModalOpen={show} toggleModal={toggle} setShow={setShow}/>
           </div>
         
            
           
      
     
    </div>
  );
}
  
export default Home;