import React from 'react';

function WeeklyMeals( { meals }) {
    return (

    <div>
        {meals.map(meal => (
            <div className="card-body" key={user_id.id}>
                <Link to={`/api/nutrition/${user_id.id}`}>
                    <h2></h2>
                </Link>
                </div>
        ))}
    </div>
    
    )
};

export default WeeklyMeals;