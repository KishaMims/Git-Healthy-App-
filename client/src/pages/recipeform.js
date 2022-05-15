import React from 'react';

function RecipeForm(props) {
    return (
        <form className="recipe-form" onSubmit={props.getRecipes}>
            <input type="text" name="calories" placeholder="Calories" />

            <button> Search </button>
        </form>
    )
};

export default RecipeForm;

