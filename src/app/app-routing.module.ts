import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { RecipesViewComponent } from './recipes-view/recipes-view.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesViewComponent},
  { path: 'recipes/:id', component: SingleRecipeComponent},
  { path: 'new', component: NewRecipeComponent},
  { path: '', component: RecipesViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
