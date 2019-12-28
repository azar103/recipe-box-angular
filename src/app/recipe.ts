export class Recipe {
  id: number;
  name: string;
  ingredients: any[];
  url: string;
  preparation: any[];
  urlVideo: string;
  constructor(
             id: number,
             name:string,
             ingredients: any[],
             url:string,
             preparation: any[],
             urlVideo: string){

   this.id = id;
   this.name = name;
   this.ingredients = ingredients;
   this.url = url;
   this.preparation = preparation;
   this.urlVideo = urlVideo;
  }
}
