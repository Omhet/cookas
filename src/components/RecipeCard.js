import { h } from 'preact';
import useStoreon from 'storeon/preact';
import cxs from 'cxs'
import Ingredients from './Ingredients';

const RecipeCard = props => {
  const {
    title,
    image,
    pageUrl,
    ingredientsAmount,
    ingredients,
    time,
    portions
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
    <div tabIndex={0} class={cxs(style.main)}>
      <img
        onClick={handleRecipeClick}
        onError={handleImageError}
        class="image"
        src={image}
        alt={title}
        loading="lazy"
        class={cxs(style.image)}
      />
      <div class={cxs(style.content)} >
        <h3 class={cxs(style.header)} >{title}</h3>
        <div class={cxs(style.meta)} >{`${portions} ${time ? time : ''}`}</div>
        <Ingredients amount={ingredientsAmount} ingredients={ingredients} />
      </div>
    </div>
  );
};

const style = {
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
    color: 'rgba(0,0,0,.85)'
  },

  meta: {
    fontSize: '.8rem',
    color: '#666',
    marginBottom: '1rem'
  }
};

export default RecipeCard;
