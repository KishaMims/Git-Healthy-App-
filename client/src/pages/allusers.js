import React from 'react'

export default function allusers() {

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
    <div>allusers</div>
  )
}
