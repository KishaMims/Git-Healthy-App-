import React from 'react';
import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';



export default function Login() {

const [user, setUser] = useState(undefined);
   
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


  return (
    <div>
    <div>

            {!user ? (
            <ul><button className="login">
                <a href="http://localhost:3001/login">Login</a>
                </button>
                </ul>
                ) : (
                <ul>Welcome, {user.given_name}
        <button><a href="http://localhost:3001/logout">Logout</a>
        </button>
        </ul>
        )}
    </div>
    <div>
        {!user}
    </div>
</div>
  )
}
