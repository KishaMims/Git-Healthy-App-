import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';



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
            <ul><Button className="login" variant="secondary">
                <a className='login' href="http://localhost:3001/login">Login</a>
                </Button>{' '}
                </ul>
                ) : (
                <ul>Welcome, {user.given_name}      

        <Button className="login" variant="secondary"><a className='login' href="http://localhost:3001/logout">Logout</a>
        </Button>{' '}
        </ul>
        )}
    </div>
    <div>
        {!user}
    </div>
</div>
  )
}
