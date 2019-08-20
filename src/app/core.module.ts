import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ]
})
export class CoreModule { }