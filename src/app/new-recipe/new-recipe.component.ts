import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { Subscription } from 'rxjs';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipeSubscription: Subscription;
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipesSubject.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipeService.emitRecipes();
    this.initForm();
  }

  initForm() {
    this.recipeForm = this.formBuilder.group({
         name: ['', Validators.required],
         img_address: ['', Validators.required],
         video_address: '',
         ingredients: this.formBuilder.array([]),
         instructions: this.formBuilder.array([]),
    });
  }

  getIngredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  getInstructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  onAddIngredient() {
    const newIngredientControl = this.formBuilder.control(null, Validators.required);
    this.getIngredients().push(newIngredientControl);
  }

  onAddInstruction() {
    const newInstructionControl = this.formBuilder.control(null, Validators.required);
    this.getInstructions().push(newInstructionControl);
  }
  onSubmitForm() {
    const form = this.recipeForm.value;
    console.log(this.recipes.length);
    const id = this.recipes[(this.recipes.length - 1)].id + 1;
    const name = form["name"];
    const ingredients = form["ingredients"] ? form["ingredients"] : [];
    console.log(ingredients);
    const url = form["img_address"]
    const instructions = form["instructions"] ? form["instructions"] : [];
    const video = form["video_address"];
    const recipe = new Recipe(id, name, ingredients, url, instructions, video);
    this.recipeService.addRecipe(recipe);
    this.router.navigate(['/recipes']);
  }



}
