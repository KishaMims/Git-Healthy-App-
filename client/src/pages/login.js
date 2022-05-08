import React from 'react';
import { useState, useEffect } from 'react';

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
        <ul>
            {!user ?(<li><a href="http://localhost:3001/login">Login</a></li>) 
            : (<li> Hello, {user.email}<a href="http://localhost:3001/logout">Logout</a></li>)
            }
        </ul>
    </div>
  )
};
