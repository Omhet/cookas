import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';
import Placeholder from "./Placeholder";
import RecipeCard from './RecipeCard';
import { useDataApi, getRecipesSearchUrl } from '../utils/helpers';
import { showcaseUrl } from "../utils/consts";

const ps = picostyle(h);

const SearchPanel = props => {
  const [query, setQuery] = useState('');
  const { dispatch, foundRecipes } = useStoreon('foundRecipes');
  console.log(foundRecipes);
  const { data, isLoading, isError, doFetch } = useDataApi(showcaseUrl, {
    recipes: foundRecipes
  }, true);

  useEffect(() => {
    dispatch('setFoundRecipes', data.recipes);
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    doFetch(getRecipesSearchUrl(query));
  }

  const loaderContent = (
    <div>
      <p>Ищу рецепты</p>
      <p>Подождите, пожалуйста</p>
    </div>
  );

  return (
    <div class={props.class}>
      <form class="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Найти блюдо..."
          onChange={e => setQuery(e.target.value)}
        />
      </form>
      <Placeholder
        isError={isError}
        isLoading={isLoading}
        loaderContent={loaderContent}
      >
        {foundRecipes && foundRecipes.length > 0 ? (
          <div className={classes.recipes}>
            {foundRecipes.map((r) => (
              <RecipeCard key={r.pageUrl} {...r} />
            ))}
          </div>
        ) : (
          <div>
            <p>Ох, ничего не найдено</p>
          </div>
        )}
      </Placeholder>
    </div>
  );
};

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ' .search': {
    marginBottom: 32,
    marginTop: 32
  },
  ' .recipes': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '3rem',
    alignItems: 'baseline',
    '@media (max-width: 1040px)': {
      gridTemplateColumns: '1fr 1fr'
    },
    '@media (max-width: 680px)': {
      gridTemplateColumns: '1fr'
    }
  }
};

export default ps(SearchPanel)(style);
