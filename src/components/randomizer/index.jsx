import React, { useState } from 'react';
import './index.scss'
import productsData from '../../assets/products.json';

function Randomizer() {
  const [randomMenu, setRandomMenu] = useState(null);
  const products = productsData.categories;

  const menuRandomizer = () => {
    const randomMenu = {
      sandwich: getRandomProduct(products.sandwich),
      coldDrink: getRandomProduct(products.drinks.cold),
      smallSandwich: getRandomProduct(products.small_sandwich),
      fries: getRandomProduct(products.fries),
      dessert: getRandomProduct(products.dessert),
    };

    setRandomMenu(randomMenu);
  };

  const getRandomProduct = (productsArray) => {
    if (!productsArray || productsArray.length === 0) {
      console.error("Tableau vide ou invalide :", productsArray);
      return { name: "Aucun produit" };
    }
    const randomIndex = Math.floor(Math.random() * productsArray.length);
    return productsArray[randomIndex];
  };

  return (
    <section>
      <button onClick={menuRandomizer}>Choisir</button>
      {randomMenu && (
        <div>
          <h2>Votre menu aléatoire</h2>
          <p>🍔 Sandwich: <b>{randomMenu.sandwich?.name}</b></p>
          <p>🥤 Boisson froide: <b>{randomMenu.coldDrink?.name}</b></p>
          <p>🌯 P'tit sandwich: <b>{randomMenu.smallSandwich?.name}</b></p>
          <p>🍟 Frites: <b>{randomMenu.fries?.name}</b></p>
          <p>🍨 Dessert: <b>{randomMenu.dessert?.name}</b></p>
        </div>
      )}
    </section>
  );
}

export default Randomizer;