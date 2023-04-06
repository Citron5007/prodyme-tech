import './App.css';
import Article from './components/Article';
import Hero from './components/Hero';
import NavLink from './components/NavLink';
import SocialLink from './components/SocialLink';
import logo from './logo.png'
import LinkedInIcon from "./assets/icons/001-linkedin.png"
import TwitterIcon from "./assets/icons/002-twitter.png"
import FacebookIcon from "./assets/icons/003-facebook.png"
import YouTubeIcon from "./assets/icons/004-youtube.png"
import RSSIcon from "./assets/icons/005-rss-feed-button.png"

function App() {
  return <>
  <div id="body"> 
    <div id='logo'>
      <img id='logo'src={logo} alt="" />
    </div>
    <div className="navHead">
      <NavLink text="Lorem Ipsum" link="#"/>
      <NavLink text="Lorem Ipsum" link="#"/>
      <NavLink text="Lorem Ipsum" link="#"/>
      <NavLink text="Lorem Ipsum" link="#"/>
      <NavLink text="Lorem Ipsum" link="#"/>
    </div>
    <div className="progname">
      <h3 id="progtext">Program Name Goes Here</h3>
    </div>
    
    <Hero src="https://tiimg.tistatic.com/fp/1/005/226/100-cotton-grey-fabric-40s-40s-124-72-plain--814.jpg" title="Main Story Title goes here" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lorem."/>

    <hr id='hel'></hr>

    <div className="section">
      <Article src="https://tiimg.tistatic.com/fp/1/005/226/100-cotton-grey-fabric-40s-40s-124-72-plain--814.jpg" title="Title Goes Here" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.  "/>

      <div id="vertline"></div>
      
      <Article  src="https://tiimg.tistatic.com/fp/1/005/226/100-cotton-grey-fabric-40s-40s-124-72-plain--814.jpg" title="Title Goes Here" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.  "/>

    </div>
    
    <hr></hr>

    <div id="socialLinks"> 
      <h2 id="socialtext">Connect With Us</h2>
      <SocialLink icon={FacebookIcon} link="#"/>
      <SocialLink icon={TwitterIcon} link="#"/>
      <SocialLink icon={YouTubeIcon} link="#"/>
      <SocialLink icon={LinkedInIcon} link="#"/>
      <SocialLink icon={RSSIcon} link="#"/>
    </div>
  
  </div>
  
  <div id="contact">
  <p> © 2014 The University Of Chicago Booth School of Business</p>
  <p>Office OF XXXXXXXXXXXXX, The University Of Chicago Booth School of Business <br />
  5807 South Woodlawn Avenue, CHicago, Illinois 60637 | Tel: XXX XXX XXXX | Email: <span id='mail'>XXXX@ChicagoBooth.edu</span> </p>
  </div>

  </>

}

export default App;
