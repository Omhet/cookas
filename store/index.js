import createStore from 'storeon';

const recipeModal = store => {
  store.on('@init', () => ({ clickedRecipe: {}, isRecipeModalOpen: false }));
  store.on(
    'openRecipeModal',
    ({ clickedRecipe, isRecipeModalOpen }, recipe) => ({
      clickedRecipe: recipe,
      isRecipeModalOpen: true
    })
  );

  store.on(
    'closeRecipeModal',
    ({ clickedRecipe, isRecipeModalOpen }) => ({
      clickedRecipe: {},
      isRecipeModalOpen: false
    })
  );
};

const foundRecipes = store => {
  store.on('@init', () => ({foundRecipes: []}));

  store.on('setFoundRecipes', ({ foundRecipes }, recipes) => ({
    foundRecipes: recipes
  }));
};

export const store = createStore([recipeModal, foundRecipes]);
