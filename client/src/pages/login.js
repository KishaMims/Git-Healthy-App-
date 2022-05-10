import React from 'react';
import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';



export default function Login() {

    const [user, setUser] = useState(undefined);
    // const navigate = useNavigate();
    // const { email } = useParams();


    // const [allusers, setAllUsers] = useState([]);

    
    //     useEffect(() => {
    //         fetch('http://localhost:3000/api/all/nutrition')
    //            .then((response) => response.json())
    //            //.then(response => response.text())
    //             .then(allusers => {
    //                 setAllUsers(allusers);
    //                 console.log(allusers);
    //             }
    
    //             )
    
    //     }, []);

   
    const loadUser = () => {
        fetch("/api/login")
        .then((response) => {
        if(response.status === 200){
            return response.json()
           
        } else {
          return undefined;
        }
        })
        .then(user =>{
            setUser(user);
        })
    };
    
    useEffect(()=>{
        loadUser();
    }, []);    

//     const handleOnClick = () => {
//        fetch(`http://localhost:5000/api/nutrition/${email}`,{
//        method: 'POST'
//        }).then(()=> {
//        navigate('/api/nutrition//meals')
//       })
//   };

  return (
    <div>
    <div>
            {!user ? (<ul><button className="login"><a href="http://localhost:3001/login">Login</a></button></ul>) : (<ul>Welcome, {user.email} <button><a href="http://localhost:3001/logout">Logout</a></button></ul>)}
    </div>
    <div>
        {!user}
    </div>
</div>
  )
}
