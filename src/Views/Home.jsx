// Routing.js used to route pages (imported by App.js )
import React from "react";
import FancyBackground from "./fancybackground";
import FancyEffect2 from "./fancyEffect2";
import FancyEffect1 from "./fancyEffect1";
import './Home.css'

const Home = () => {

  const typingCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

    return(
       <div id="main">
         <FancyBackground/>
         <div className="content" >
         <FancyEffect2 initialText="MIN HTUT MYAT" typingCharacters={typingCharacters} />
           <div className="fancy-text">
              <FancyEffect1 />
           </div>
         </div>
       </div>
    );
};

export default Home;