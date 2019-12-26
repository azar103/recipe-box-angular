import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
