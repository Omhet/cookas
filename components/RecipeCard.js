import { h } from 'preact';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';

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
    dispatch('openClickedRecipe', {
      title,
      image,
      ingredients,
      ingredientsAmount,
      portions,
      pageUrl,
      time
    });
  };

  return (
    <div class={props.class}>
      <img onClick={handleRecipeClick} class="image" src={image} alt={title} />
      <div class="content">
        <h3 class="header">{title}</h3>
        <div class="meta">{`${portions} ${time ? time : ''}`}</div>
        <div class="description">{ingredientsAmount}</div>
      </div>
    </div>
  );
};

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  cursor: 'pointer',
  width: '20rem',
  height: '20rem',
  boxShadow: '0 0 2px 2px #ddd'
};

export default ps(RecipeCard)(style);
