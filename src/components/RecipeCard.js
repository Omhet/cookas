import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { injectStyle } from '../utils/injectStyle';
import Ingredients from './Ingredients';

const RecipeCard = props => {
  const {
    title,
    image,
    pageUrl,
    ingredientsAmount,
    ingredients,
    time,
    portions,
    classes
  } = props;

  const { dispatch, clickedRecipe } = useStoreon('clickedRecipe');

  const handleRecipeClick = () => {
    dispatch('openRecipeModal', {
      title,
      image,
      ingredients,
      ingredientsAmount,
      portions,
      pageUrl,
      time
    });
  };

  const handleImageError = (e) => {
    e.target.src = '../cookas/assets/no-photo.svg'
  };

  return (
    <div tabIndex={0} class={classes.main}>
      <img
        onClick={handleRecipeClick}
        onError={handleImageError}
        class="image"
        src={image}
        alt={title}
        loading="lazy"
        class={classes.image}
      />
      <div class={classes.content} >
        <h3 class={classes.header} >{title}</h3>
        <div class={classes.meta} >{`${portions} ${time ? time : ''}`}</div>
        <Ingredients amount={ingredientsAmount} ingredients={ingredients} />
      </div>
    </div>
  );
};

const style = ({ colors: { text } }) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    userSelect: 'none',
    width: '20rem',
  },

  image: {
    cursor: 'pointer',
    width: '100%',
    maxHeight: '20rem'
  },

  content: {
    width: '100%'
  },

  header: {
    marginBottom: '.5rem',
    marginTop: '.5rem',
    color: text.primary
  },

  meta: {
    fontSize: '.8rem',
    color: text.secondary,
    marginBottom: '1rem'
  }
});

export default injectStyle(style)(RecipeCard);
