import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  name: string;
  ingredients: any[];
  urlImg: string;
  preparation: any[];
  urlVideo: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.recipeService.getRecipeById(+id).name;
    this.urlImg = this.recipeService.getRecipeById(+id).url;
    this.urlVideo = this.recipeService.getRecipeById(+id).urlVideo;
    this.ingredients = this.recipeService.getRecipeById(+id).ingredients;
    this.preparation = this.recipeService.getRecipeById(+id).preparation;
  }

}
