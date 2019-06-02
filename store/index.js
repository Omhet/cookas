import createStore from 'storeon';
import { fetchShowcaseRecipes } from '../utils/helpers';

// async function init() {
//   const { recipes } = await fetchShowcaseRecipes();
//   console.log(recipes);
// }

// init();

const clickedRecipe = store => {
  store.on('@init', () => ({ clickedRecipe: {}, isRecipeInfoOpen: false }));
  store.on(
    'openClickedRecipe',
    ({ clickedRecipe, isRecipeInfoOpen }, recipe) => ({
      clickedRecipe: recipe,
      isRecipeInfoOpen: true
    })
  );
};

const foundRecipes = store => {
  store.on('@init', () => ({foundRecipes: []}));

  store.on('setFoundRecipes', ({ foundRecipes }, recipes) => ({
    foundRecipes: recipes
  }));
};

export const store = createStore([clickedRecipe, foundRecipes]);
