import { Recipe } from '../recipe';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class RecipeService {
 recipesSubject = new Subject<any []>();
 private recipes =  [];
  constructor(private httpClient: HttpClient) {}
  emitRecipes() {
    this.recipesSubject.next(this.recipes.slice());
  }
  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.emitRecipes();
  }
  getRecipeById(id: number) {
   const recipe =  this.recipes.find(
     // tslint:disable-next-line: no-shadowed-variable
     (recipe) => {
       return recipe.id === id;
     });
   return recipe;
  }

  postRecipesToServer() {
    this.httpClient.put('https://recipesapp-fc68f.firebaseio.com/recipes.json', this.recipes)
                   .subscribe(
                     () => {
                       console.log('Enregistrement terminé');
                     },
                     (error) => {
                       console.error('échec d\'enregistrment !' + error);
                     }
                   );
  }
  getRecipesFromServer() {
    this.httpClient.get<any[]>('https://recipesapp-fc68f.firebaseio.com/recipes.json')
                   .subscribe(
                     (response) => {
                        this.recipes = response;
                        this.emitRecipes();
                     },
                     (error) => {
                       console.log('échec de chargement ' + error);
                     }
                     );
  }


}
