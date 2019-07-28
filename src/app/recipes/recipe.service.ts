import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            'Pav Bhaji',
            'Typical mumbai dish',
            '../../../../assets/img/pav-bhaji-recipe-easy-mumbai-style-pav-bhaji-recipe-1-1068x1423.jpeg',
            [
                new Ingredient('Onion', 2),
                new Ingredient('Tomato', 4)
            ]),
        new Recipe(
            'Mysore Masala Dosa',
            'Its a South Indian dish specially famous in mysore. It is very spicy dish with very rich taste.',
            '../../../../assets/img/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-26-1068x1423.jpeg',
            [
                new Ingredient('Potato', 5),
                new Ingredient('Coconut', 1)
            ]),
        new Recipe(
            'Pav Bhaji',
            'Typical mumbai dish',
            '../../../../assets/img/pav-bhaji-recipe-easy-mumbai-style-pav-bhaji-recipe-1-1068x1423.jpeg',
            [
                new Ingredient('Onion', 2),
                new Ingredient('Tomato', 4)
            ]),
        new Recipe(
            'Mysore Masala Dosa',
            'Its a South Indian dish specially famous in mysore. It is very spicy dish with very rich taste.',
            '../../../../assets/img/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-26-1068x1423.jpeg',
            [
                new Ingredient('Potato', 5),
                new Ingredient('Coconut', 1)
            ]),
        new Recipe(
            'Pav Bhaji',
            'Typical mumbai dish',
            '../../../../assets/img/pav-bhaji-recipe-easy-mumbai-style-pav-bhaji-recipe-1-1068x1423.jpeg',
            [
                new Ingredient('Onion', 2),
                new Ingredient('Tomato', 4)
            ]),
        new Recipe(
            'Mysore Masala Dosa',
            'Its a South Indian dish specially famous in mysore. It is very spicy dish with very rich taste.',
            '../../../../assets/img/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-26-1068x1423.jpeg',
            [
                new Ingredient('Potato', 5),
                new Ingredient('Coconut', 1)
            ]),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}