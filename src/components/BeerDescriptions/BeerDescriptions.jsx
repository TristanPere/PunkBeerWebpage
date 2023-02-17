import React from 'react'
import "./BeerDescriptions.scss"
const BeerDescriptions = ({beer}) => {
    let ingredients = [
        [<p key={0}>Malt:</p>],
        [<p key={0}>Hops:</p>],
        [<p key={0}>Yeast:</p>],
      ];
      let pairings = [];
      for (let i = 0; i < beer.ingredients.malt.length; i++) {
        ingredients[0][i + 1] = (
          <p key={i + 1}>
            {beer.ingredients.malt[i].name}: {beer.ingredients.malt[i].amount.value}{" "}
            {beer.ingredients.malt[i].amount.unit}
          </p>
        );
      }
      for (let i = 0; i < beer.ingredients.hops.length; i++) {
        ingredients[1][i + 1] = (
          <p key={i + 1}>
            {beer.ingredients.hops[i].name}: {beer.ingredients.hops[i].amount.value}{" "}
            {beer.ingredients.hops[i].amount.unit}
          </p>
        );
      }
      ingredients[2][1] = <p>{beer.ingredients.yeast}</p>;
      for (let i = 0; i < beer.food_pairing.length; i++) {
        pairings.push(beer.food_pairing[i]);
      }
      const lastFood = pairings.pop();
      const foodString = pairings.join(", ") + " and " + lastFood;
  return (
    <section className="beer-main">
    <div className="beer-main__description">{beer.description}</div>
    <div className="beer-main__pairing">Pairs well with {foodString}</div>
    <div className="beer-main__ingredients">
      <label>
        Ingredients:
        <div className="beer-main__ingredients--items">
          <div className="beer-main__ingredients--malt">
            {ingredients[0]}
          </div>
          <div className="beer-main__ingredients--hops">
            {ingredients[1]}
          </div>
          <div className="beer-main__ingredients--yeast">
            {ingredients[2]}
          </div>
        </div>
      </label>
    </div>
  </section>
  )
}

export default BeerDescriptions