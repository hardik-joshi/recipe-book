import { Ingredient } from '../shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Banana', 10),
        new Ingredient('Apple', 20),
        new Ingredient('Onion', 2)
    ]
};

export function ShoppingListReducer(state = initialState, action) {

}