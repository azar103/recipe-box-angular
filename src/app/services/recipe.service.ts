import { Recipe } from '../recipe';

export class RecipeService {
 recipes =  [
    new Recipe('Pumpkin Pie',
    [
      'Pumpkin Puree',
      'Sweetened Condensed Milk',
      'Eggs',
      'Pumpkin Pie Spice',
      'Pie Crust'],
      'https://assets.afcdn.com/recipe/20130122/48702_w420h344c1cx638cy864.jpg',
      [
        'Préchauffez votre four à 180°C (thermostat 6).',
        'Faire cuire la chair du potiron dans l\'eau bouillante et en faire une purée; réserver.',
        'Dans un saladier, battre les oeufs et le sucre, ajouter la cannelle, la muscade, le gingembre et mélanger.',
        // tslint:disable-next-line: max-line-length
        'Ajouter ensuite la purée et le lait concentré jusqu\'à obtention d\'un mélange homogène; verser ce mélange sur la pâte brisée et enfourner à 180°C (thermostat 6) pendant 15 min.',
        // tslint:disable-next-line: max-line-length
        'Baisser la température à 165°C (th 5-6), et laisser cuire encore 30 min; laisser refroidir à température ambiante et mettre au frigo. Servir avec un peu de chantilly!'
    ],
    'https://assets.afcdn.com/video13/20140805/v502745_29555_1_HD.mp4'

      )
   ,
   new Recipe('Spaghetti',
   [
    'Noodles',
    'Tomato Sauce',
    '(Optional) Meatballs'],
    'https://static.cuisineaz.com/240x192/i2142-spaghetti-a-la-sauce-tomate.jpg',
    [
      'Commencer par émincer les oignons, les réserver.',
            'Ensuite, émincer les poivrons.',
            'Dans une sauteuse, mettre l\'huile et faire dorer les oignons, les retirer et faire dorer les poivrons.',
            // tslint:disable-next-line: max-line-length
            'Une fois les poivrons dorés, y incorporer les oignons puis la sauce tomate et le chorizo coupé en lamelle et laisser mijoter 30 minutes sans oublier de saler et poivrer.',
            'Cuire les pâtes.',
            'Servez la sauce à coté, chacun pourra se servir à sa guise.',
  ],
  'https://assets.afcdn.com/video13/20181017/v541464_19840-spaghetti-bolognaise-1080-1080-fr-pad-mp4_HD.mp4'

    )
  ,
  new Recipe('Onione Pie',
        [
          'Onion',
          'Pie Crust',
          'Sounds Yummy right?'
        ],
        'https://images.media-allrecipes.com/userphotos/560x315/6753640.jpg',
        [
          'Faire suer les oignons émincés finement dans une poêle avec de l\'huile, saler et poivrer.',
            'Battre les oeufs avec la crème fraîche.',
            'Lorsque les oignons ont blondi, ajouter hors du feu le mélange oeufs/crème.',
            'Verser le tout sur la pâte brisée étalée dans un moule, faire cuire 30 min au four à 200°C (thermostat 6-7).'
        ],
        'https://assets.afcdn.com/video13/20180615/v539941_26201-tarte-oignon-rapide-1080-1080-fr-pad-mp4_sd.mp4'

  )
  ];
}
