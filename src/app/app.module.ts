import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
