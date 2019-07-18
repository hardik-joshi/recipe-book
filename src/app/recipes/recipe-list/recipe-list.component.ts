import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pav Bhaji','Typical mumbai dish', 'https://hebbarskitchen.com/wp-content/uploads/mainPhotos/pav-bhaji-recipe-easy-mumbai-style-pav-bhaji-recipe-1-1068x1423.jpeg'),
    new Recipe('Mysore Masala Dosa', 'Its a South Indian dish specially famous in mysore. It is very spicy dish with very rich taste.', 'https://hebbarskitchen.com/wp-content/uploads/mainPhotos/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-26-1068x1423.jpeg'),
    new Recipe('Pav Bhaji','Typical mumbai dish', 'https://hebbarskitchen.com/wp-content/uploads/mainPhotos/pav-bhaji-recipe-easy-mumbai-style-pav-bhaji-recipe-1-1068x1423.jpeg'),
    new Recipe('Mysore Masala Dosa', 'Its a South Indian dish specially famous in mysore. It is very spicy dish with very rich taste.', 'https://hebbarskitchen.com/wp-content/uploads/mainPhotos/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-26-1068x1423.jpeg'),
    new Recipe('Pav Bhaji','Typical mumbai dish', 'https://hebbarskitchen.com/wp-content/uploads/mainPhotos/pav-bhaji-recipe-easy-mumbai-style-pav-bhaji-recipe-1-1068x1423.jpeg'),
    new Recipe('Mysore Masala Dosa', 'Its a South Indian dish specially famous in mysore. It is very spicy dish with very rich taste.', 'https://hebbarskitchen.com/wp-content/uploads/mainPhotos/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-26-1068x1423.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onShowRecipe(recipe: Recipe) {
    this.showRecipe.emit(recipe);
  }

}
