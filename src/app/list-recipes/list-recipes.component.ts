import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  @Input() recipes;
  constructor() { }

  ngOnInit() {
  }

}
