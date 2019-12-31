import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeService } from './services/recipe.service';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { RecipesViewComponent } from './recipes-view/recipes-view.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    RecipeComponent,
    SingleRecipeComponent,
    FourOhFourComponent,
    RecipesViewComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
