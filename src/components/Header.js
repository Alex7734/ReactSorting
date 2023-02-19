import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="intro-wrapper">
    <div class="nav-wrapper">
    <div id="headerBar" class="absolute right-0 bottom-0 h-32 w-full text-white flex items-center justify-center flex-col" style = {{transform: showHeaderBar? `translateY(0px)`: `translateY(120px)`}}>
        <h3 class="text-3xl mb-2" >Alex Mihoc</h3>
        <div class="text-white flex" >
          <a class="no-underline" href="https://www.facebook.com/dasharath.dasharath.1694/" target='_blank'><img class="h-8 w-8" src="https://img.icons8.com/ios/50/000000/facebook--v1.png"/></a>
          <a class="no-underline" href="https://www.instagram.com/dasharath_116/" target='_blank'><img class="h-8 w-8" src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a>
          <a class="no-underline" href="https://github.com/Dasharath9920" target='_blank'><img class="h-8 w-8" src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
          <a class="no-underline" href="https://www.linkedin.com/in/dyavari-dasharath-b767021b3/" target='_blank'><img class="h-8 w-8" src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>
      <a href="">
        <div class="dots-wrapper">
          <div id="dot-1" class="browser-dot"></div>
          <div id="dot-2" class="browser-dot"></div>
          <div id="dot-3" class="browser-dot"></div>
        </div>
      </a>


      <ul id="navigation">
        <li><h3 className="headerOption" class="text-lg flex font-medium text-gray-700 mr-20 cursor-pointer" onClick = {contactHandler}>Contact</h3></li>
      </ul>
    </div>

    </div>    

  )
}

export default Header;