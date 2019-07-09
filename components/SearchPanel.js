import { useState, useEffect } from 'preact/hooks';
import useStoreon from 'storeon/preact';
import cxs from 'cxs'
import Placeholder from './Placeholder';
import Input from './Input';
import RecipeCard from './RecipeCard';
import { useDataApi, getRecipesSearchUrl } from '../utils/helpers';
import { showcaseUrl } from '../utils/consts';
import SearchIcon from '../images/search.svg';


const SearchPanel = props => {
  const [query, setQuery] = useState('');
  const { dispatch, foundRecipes } = useStoreon('foundRecipes');
  const { data, isLoading, isError, doFetch } = useDataApi(
    showcaseUrl,
    {
      recipes: foundRecipes
    },
    true
  );

  useEffect(() => {
    dispatch('setFoundRecipes', data.recipes);
  }, [data]);

  function handleRecipesQuery(e) {
    if (!query) return;
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
    <div class={cxs(style.main)}>
      <form class={cxs(style.search)} onSubmit={handleRecipesQuery}>
        <Input
          placeholder="Найти блюдо..."
          onChange={e => setQuery(e.target.value)}
          icon={<SearchIcon onClick={handleRecipesQuery} />}
        />
      </form>
      <Placeholder
        isError={isError}
        isLoading={isLoading}
        loaderContent={loaderContent}
      >
        {foundRecipes && foundRecipes.length > 0 ? (
          <div class={cxs(style.recipes)}>
            {foundRecipes.map(r => (
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
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  search: {
    marginBottom: '2rem',
    marginTop: '2rem'
  },
  recipes: {
    marginTop: '3rem',
    display: 'grid',
    gridGap: '3rem',
    alignItems: 'baseline',
    gridTemplateColumns: '1fr 1fr 1fr',
    '@media (max-width: 1040px)': {
      gridTemplateColumns: '1fr 1fr'
    },
    '@media (max-width: 680px)': {
      gridTemplateColumns: '1fr'
    }
  }
};

export default SearchPanel;
