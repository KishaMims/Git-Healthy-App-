import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

function RecipeForm(props) {
    return (
        <Form className="recipe-form" onSubmit={props.getRecipes}>
            <input type="text" name="calories" placeholder="Calories" />
            <Button variant="outline-success"> Search</Button>{' '}
        </Form>
    )
};

export default RecipeForm;

