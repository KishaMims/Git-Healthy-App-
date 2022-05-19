import React from 'react';
import { render } from '@testing-library/react';
import Login from './pages/login.js';
import Recipes from './pages/recipe.js';
import UserView from './pages/homepage.js';
import RecipeForm from './pages/homepage.js';
import Contact from './pages/contact.js';
import SearchFood from './pages/searchfood.js';

describe("Login", () => {
  test("renders my login component", () => {
    render(<Login />);
  });
});

describe("Recipes", () => {
  test("renders my recipes component", () => {
    render(<Recipes />);
  });
});


describe("Userview", () => {
  test("renders my userview component", () => {
    render(<UserView />);
  });
});


describe("RecipeForm", () => {
  test("renders my userview component", () => {
    render(<RecipeForm />);
  });
});

describe("Contact", () => {
  test("renders my contact component", () => {
    render(<Contact />);
  });
});


describe("SearchFood", () => {
  test("renders my search food component", () => {
    render(<SearchFood />);
  });
});


