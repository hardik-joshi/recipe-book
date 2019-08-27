import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import * as fromAppt from '../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromAppt.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('recipes')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
