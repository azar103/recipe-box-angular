import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Route } from '@angular/compiler/src/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value.name;
    const ingredients = form.value.ingredients;
    const url = form.value["img_address"];
    const instructions = form.value.instructions;
    const video = form.value["video_address"];
    this.recipeService.addRecipe(name, ingredients, url, instructions, video);
    this.router.navigate(['/recipes']);

  }

}
