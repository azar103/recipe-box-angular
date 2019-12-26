import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  nameRecipeOne = 'Pumpkin Pie';
  urlRecipeOne = 'https://assets.afcdn.com/recipe/20130122/48702_w420h344c1cx638cy864.jpg';
  nameRecipeTwo = 'Spaghetti';
  urlRecipeTwo = 'https://static.cuisineaz.com/240x192/i2142-spaghetti-a-la-sauce-tomate.jpg';
  nameRecipeThree = 'Onion Pie';
  urlRecipeThree = 'https://images.media-allrecipes.com/userphotos/560x315/6753640.jpg';
  constructor() { }

  ngOnInit() {
  }

}
