import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  recipes: any[];
  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }
}
