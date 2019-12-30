import React from 'react';

import { IngredientCard } from './areas/fodmap/ingredient-card';
import { ingredients, Ingredient } from '../constants/fodmap';

import './fodmap.scss';

export const Foodmap: React.FC = () => {
  return (
    <div className="container fodmap-page">
      <div className="fodmap-header">
        <h1>Fodmap</h1>
        <h2>Directory of ingredients</h2>
      </div>
      <div className="ingredients-wrapper row">
        {ingredients.map((ingredient: Ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};
