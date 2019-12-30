export class Recipe {
  constructor(
            public  id: number,
            public  name: string,
            public  ingredients: any[],
            public  url: string,
            public  preparation ?: any[],
            public  urlVideo ?: string) {
  }




}
