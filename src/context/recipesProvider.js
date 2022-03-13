import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './recipesContext';

function RecipesProvider({ children }) {
  const [isOpenedSearch, setOpened] = useState({ isOpened: false });
  const [searchFoods, setSearchFoods] = useState([]);
  const [filtredFoods, setFiltredFoods] = useState([]);
  const [filtredDrinks, setFiltredDrinks] = useState([]);
  const openOrCloseSearchInput = () => {
    setOpened((prevState) => ({ isOpened: !prevState.isOpened }));
  };
  const closeSearch = () => {
    setOpened(() => ({ isOpened: false }));
  };

  function updateFiltredFoods(res) {
    setFiltredFoods(res);
  }

  function updateFiltredDrinks(res) {
    setFiltredDrinks(res);
  }

  function updateSearchFoods(res) {
    setSearchFoods(res);
  }

  function updateRecipesInProgressFood(id, ingredients) {
    const recoverFromStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const conditionalObject = recoverFromStorage === null ? {
      cocktails: {},
      meals: {
        [id]: ingredients,
      },
    } : {
      ...recoverFromStorage,
      meals: {
        ...recoverFromStorage.meals,
        [id]: ingredients,
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify(conditionalObject));
  }

  function updateRecipesInProgressDrinks(id, ingredients) {
    const recoverFromStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const conditionalObject = recoverFromStorage === null ? {
      cocktails: {
        [id]: ingredients,
      },
      meals: {},
    } : {
      ...recoverFromStorage,
      cocktails: {
        ...recoverFromStorage.cocktails,
        [id]: ingredients,
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify(conditionalObject));
  }

  function updateFavoriteRecipes(recipe) {
    const { id, type, nationality, category, alcoholicOrNot, name, image } = recipe;
    const recoverFromStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const conditionalObject = recoverFromStorage === null ? [
      { id, type, nationality, category, alcoholicOrNot, name, image },
    ] : [
      ...recoverFromStorage,
      { id, type, nationality, category, alcoholicOrNot, name, image },
    ];

    localStorage.setItem('favoriteRecipes', JSON.stringify(conditionalObject));
  }

  return (
    <recipesContext.Provider
      value={ {
        updateSearchFoods,
        searchFoods,
        isOpenedSearch,
        openOrCloseSearchInput,
        updateFiltredFoods,
        filtredFoods,
        filtredDrinks,
        updateFiltredDrinks,
        closeSearch,
        updateRecipesInProgressFood,
        updateRecipesInProgressDrinks,
        updateFavoriteRecipes } }
    >
      {children}
    </recipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;
