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
            'Achari Paneer Tikka',
            'Delicious recipe of India',
            '../../../../assets/img/achari-paneer-tikka-recipe-easy-achari-paneer-tikka-on-tawa-15-696x522.jpeg',
            [
                new Ingredient('Panner', 12),
                new Ingredient('Mango', 3)
            ]),
        new Recipe(
            'Aloo Chat',
            'Its a taccy taste. Its a mouth watering dish.',
            '../../../../assets/img/aloo-chaat-recipe-how-to-make-spicy-alu-chaat-potato-chaat-recipe-1.jpeg',
            [
                new Ingredient('Potato', 5),
                new Ingredient('Tomato', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Pomgrante', 1),
                new Ingredient('Garlic', 1)
            ]),
        new Recipe(
            'Aloo Kachori',
            'aloo ki kachori is a famous north indian street food snack recipe and is particularly popular in uttar pradesh and agra.',
            '../../../../assets/img/aloo-kachori-recipe-aloo-ki-kachori-recipe-potato-stuffed-kachori-1-769x1024.jpeg',
            [
                new Ingredient('Onion', 2),
                new Ingredient('Tomato', 4),
                new Ingredient('Potato', 4)
            ]),
        new Recipe(
            'Aloo Pakora',
            'A simple potato-based deep fried snack recipe made with spiced besan or chickpea flour coating. potato bajji or also known as potato fritters can be an ideal evening snack recipe with a cup of tea or perhaps as a crispy side dish for lunch or dinner.',
            '../../../../assets/img/aloo-pakora-recipe-potato-pakora-recipe-aloo-bajji-or-potato-bajji-1-696x927.jpeg',
            [
                new Ingredient('Potato', 2)
            ]),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}