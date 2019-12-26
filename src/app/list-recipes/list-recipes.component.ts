import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.sass']
})
export class ListRecipesComponent implements OnInit {
  title = 'mon premier component';
  constructor() { }

  ngOnInit() {
  }

}
