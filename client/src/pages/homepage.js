
import React from "react";
import background from "./homepage.png";




function Home () {
    
    return (
        <div className="homepage" style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: "895px"
          }}>
           Git Healthy 
          </div>

    )
  
}

export default Home;