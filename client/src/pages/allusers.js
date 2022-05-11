import React from 'react';
import { useEffect, useState } from "react";
export default function Allusers() {
const [users, setUser] = useState(undefined);

    useEffect(() => {
        fetch('http://localhost:3001/api/nutrition/users')
           .then((response) => response.json())
           //.then(response => response.text())
            .then(users => {
                setUser(users);
            }
    
            )
           
    }, []);

  return (
    <div>allusers
   <>{JSON.stringify(users)}</>
    </div>
  )
}
