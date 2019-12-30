import React from 'react';
import classnames from 'classnames';

import { Ingredient } from '../../../constants/fodmap';

interface Props {
  ingredient: Ingredient;
}

const RANDOM_IMAGE = 'https://imbindonesia.com/images/placeholder/food.png';

export const IngredientCard: React.FC<Props> = ({ ingredient }) => {
  const { name, image, group, category } = ingredient;

  const background = {
    'bg-danger': group === 'Very high Fodmap',
    'bg-warning': group === 'High Fodmap',
    'bg-success': group === 'Low Fodmap',
  };

  return (
    <div className="col-sm-6 col-md-4">
      <div className={classnames('card text-white mb-3', background)}>
        <div className="card-header">{group}</div>
        <img className="card-img-top" src={image.length > 0 ? image : RANDOM_IMAGE} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className={classnames('list-group-item', background)}>{category}</li>
        </ul>
      </div>
    </div>
  );
};
