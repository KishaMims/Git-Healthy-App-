
import React from "react";
import Login from "./login";



function Home () {
 
    // const [user, setUser] = useState(undefined);

    // const loadUser = () => {
    //     fetch("api/login")
    //     .then((response) => {
    //     if(response.status === 200){
    //         return response.json()
    //     } else {
    //       return undefined;
    //     }
    //     })
    //     .then(user =>{
    //         setUser(user);
    //     })
    // };
    
    // useEffect(()=>{
    //     loadUser();
    // }, []);    


    return (
        <div className="homepage">
            <h2 className="HomeTitle"> Git Helathy Home Page </h2>
            <Login/>
            </div>
      
    )
}

export default Home;