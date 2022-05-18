
import React from "react";
import background from "./homepagebckgrd.jpg";




function Home () {
    
    return (
        <div className="homepage"
        style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: "895px"
          }}>
           <div>
           </div>
          </div>

    )
  
}

export default Home;