import { h } from 'preact';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';
import Ingredients from './Ingredients';

const ps = picostyle(h);

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
    e.target.src = '../images/no-photo.svg'
  };

  return (
    <div tabIndex={0} class={props.class}>
      <img
        onClick={handleRecipeClick}
        onError={handleImageError}
        class="image"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div class="content">
        <h3 class="header">{title}</h3>
        <div class="meta">{`${portions} ${time ? time : ''}`}</div>
        <div class="description">
          <Ingredients amount={ingredientsAmount} ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  userSelect: 'none',
  width: '20rem',
  
  ' .image': {
    cursor: 'pointer',
    width: '100%',
    maxHeight: '20rem'
  },

  ' .content': {
    width: '100%'
  },

  ' .header': {
    marginBottom: '.5rem',
    marginTop: '.5rem',
    color: 'rgba(0,0,0,.85)'
  },

  ' .meta': {
    fontSize: '.8rem',
    color: '#666',
    marginBottom: '1rem'
  }
};

export default ps(RecipeCard)(style);
