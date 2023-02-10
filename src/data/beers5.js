const beers5 = [
  {
    id: 321,
    name: "Jinx Pale Ale",
    tagline: "American Pale Ale.",
    first_brewed: "2018",
    description:
      "A new 4.7% ABV American pale ale, Jinx Pale Ale is one of the core Fanzine beers, and will feature evolving editions as part of our new subscription model.",
    image_url: null,
    abv: 4.7,
    ibu: 35,
    target_fg: 1008,
    target_og: 1043,
    ebc: 13,
    srm: 7,
    ph: 4.6,
    attenuation_level: 81,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 63, unit: "celsius" }, duration: 35 }],
      fermentation: { temp: { value: 21, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pale Ale", amount: { value: 3.12, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.48, unit: "kilograms" } },
        { name: "Dextrin Malt", amount: { value: 0.18, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Simcoe",
          amount: { value: 6, unit: "grams" },
          add: "65",
          attribute: "Bittering",
        },
        {
          name: "Chinook",
          amount: { value: 10, unit: "grams" },
          add: "10",
          attribute: "Flavour",
        },
        {
          name: "Simcoe",
          amount: { value: 20, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
        {
          name: "Chinook",
          amount: { value: 20, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
        {
          name: "Simcoe",
          amount: { value: 60, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
        {
          name: "Centennial",
          amount: { value: 60, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: ["Monterey Jack stuffed grilled jalapeños", "Apple pie"],
    brewers_tips:
      "Rack this into a corny keg, cool it down and carbonate it with 10 PSI of top pressure for 10 days. Should be super drinkable.",
    contributed_by: "John Jenkman <johnjenkman>",
  },
  {
    id: 322,
    name: "Jet Trash",
    tagline: "West Coast IPA.",
    first_brewed: "2018",
    description:
      "A new 6.9% ABV West Coast IPA, Jet Trash is one of the core Fanzine beers, and will feature evolving editions as part of our new subscription model.",
    image_url: null,
    abv: 6.9,
    ibu: 65,
    target_fg: 1008,
    target_og: 1060,
    ebc: 18,
    srm: 9,
    ph: 4.6,
    attenuation_level: 87,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 55 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pale Ale", amount: { value: 4.56, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.36, unit: "kilograms" } },
        { name: "Dextrin Malt", amount: { value: 0.24, unit: "kilograms" } },
        { name: "Carared", amount: { value: 0.24, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Simcoe",
          amount: { value: 32, unit: "grams" },
          add: "65",
          attribute: "Bittering",
        },
        {
          name: "Cascade",
          amount: { value: 20, unit: "grams" },
          add: "10",
          attribute: "Flavour",
        },
        {
          name: "Cascade",
          amount: { value: 30, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
        {
          name: "Centennial",
          amount: { value: 30, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
        {
          name: "Citra",
          amount: { value: 60, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
        {
          name: "Simcoe",
          amount: { value: 40, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
        {
          name: "Cascade",
          amount: { value: 20, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
        {
          name: "Chinook",
          amount: { value: 20, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
        {
          name: "Mosaic",
          amount: { value: 20, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: ["Roast chicken", "Seared steak", "Crusty bread"],
    brewers_tips:
      "Split this batch and try fermenting the other half with WLP008 East Coast Ale, dry hop whilst primary fermentation is going and have an East Coast IPA to compare with.",
    contributed_by: "John Jenkman <johnjenkman>",
  },
  {
    id: 323,
    name: "Interstate Vienna Lager.",
    tagline: "Vienna Lager.",
    first_brewed: "2018",
    description:
      "A new 5% ABV Vienna Lager, that features in Fanzine, our new subscription model.",
    image_url: null,
    abv: 5,
    ibu: 25,
    target_fg: 1007,
    target_og: 1045,
    ebc: 14,
    srm: 7,
    ph: 4.2,
    attenuation_level: 84,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 67, unit: "celsius" }, duration: 70 }],
      fermentation: { temp: { value: 10, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pilsner", amount: { value: 1.56, unit: "kilograms" } },
        { name: "Vienna", amount: { value: 1.56, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.6, unit: "kilograms" } },
        { name: "Carahell", amount: { value: 0.18, unit: "kilograms" } },
        { name: "Carared", amount: { value: 0.18, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Perle",
          amount: { value: 5, unit: "grams" },
          add: "65",
          attribute: "Bittering",
        },
        {
          name: "Hallertauer Mittelfrüh",
          amount: { value: 20, unit: "grams" },
          add: "10",
          attribute: "Aroma",
        },
        {
          name: "Mandarina Bavaria",
          amount: { value: 20, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
      ],
      yeast: "Wyeast 2126 - Bohemian Lager™",
    },
    food_pairing: [
      "Grilled chicken and steamed vegetables",
      "Pork sausages",
      "Almond biscotti",
    ],
    brewers_tips:
      "Instead of using Pilsner, try to substitute this out for more Vienna malt. This is more traditional but you should calculate your diastatic power for your new mash. Ideally it should be a minimum of 30 to 50 Lintner.",
    contributed_by: "John Jenkman <johnjenkman>",
  },
  {
    id: 324,
    name: "Fools Gold Dortmunder Lager",
    tagline: "Lager.",
    first_brewed: "2018",
    description:
      "A new 5.6% Dortmunder Lager, that featues in Fanzine, our new subscription model.",
    image_url: null,
    abv: 5.6,
    ibu: 32,
    target_fg: 1009,
    target_og: 1052,
    ebc: 11,
    srm: 6,
    ph: 4.2,
    attenuation_level: 83,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 45 }],
      fermentation: { temp: { value: 14, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pilsner", amount: { value: 3.36, unit: "kilograms" } },
        { name: "Pale Ale", amount: { value: 1.2, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Magnum",
          amount: { value: 10, unit: "grams" },
          add: "70",
          attribute: "Bitering",
        },
        {
          name: "Sterling",
          amount: { value: 20, unit: "grams" },
          add: "10",
          attribute: "Flavour",
        },
        {
          name: "Sterling",
          amount: { value: 20, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
      ],
      yeast: "Saflager W-34/70",
    },
    food_pairing: [
      "Seafood salad",
      "Sweet and sour pork",
      "Lemon drizzle cake",
    ],
    brewers_tips:
      "Make sure you burtonise your water as Dortmund's water contains a fairly high amount of sulphates. Carbonate this to approximately 2.6 volumes",
    contributed_by: "John Jenkman <johnjenkman>",
  },
  {
    id: 325,
    name: "Zipcode",
    tagline: "Pilsner.",
    first_brewed: "2018",
    description:
      "A new 5% Pilsner, that feaures in Fanzine, our new subscription model.",
    image_url: null,
    abv: 5,
    ibu: 37,
    target_fg: 1006,
    target_og: 1044,
    ebc: 5,
    srm: 3,
    ph: 4.4,
    attenuation_level: 86,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 50, unit: "celsius" }, duration: 50 }],
      fermentation: { temp: { value: 11, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pilsner", amount: { value: 3.54, unit: "kilograms" } },
        { name: "Carapils", amount: { value: 0.24, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Magnum",
          amount: { value: 12, unit: "grams" },
          add: "70",
          attribute: "Bittering",
        },
        {
          name: "Spalter",
          amount: { value: 15, unit: "grams" },
          add: "30",
          attribute: "Flavour",
        },
        {
          name: "Spalter",
          amount: { value: 15, unit: "grams" },
          add: "10",
          attribute: "Flavour",
        },
        {
          name: "Saphire",
          amount: { value: 30, unit: "grams" },
          add: "0",
          attribute: "Aroma",
        },
        {
          name: "Saphire",
          amount: { value: 30, unit: "grams" },
          add: "Dry Hop",
          attribute: "Aroma",
        },
      ],
      yeast: "Saflager W-34/70",
    },
    food_pairing: ["Goat's cheese salad", "Pesto pasta", "Lemon cookies"],
    brewers_tips:
      "Saphir hops are not widespread at the moment if you cannot get hold of any, a good batch of Mittlefruh is a fair substitute.",
    contributed_by: "John Jenkman <johnjenkman>",
  },
];
export default beers5;
