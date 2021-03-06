import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() name: string;
  @Input() url: string;
  @Input() id: number;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
