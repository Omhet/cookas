import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';
import Placeholder from './Placeholder';
import Input from './Input';
import RecipeCard from './RecipeCard';
import { useDataApi, getRecipesSearchUrl } from '../utils/helpers';
import { showcaseUrl } from '../utils/consts';
import SearchIcon from '../images/search.svg';


const ps = picostyle(h);

const SearchPanel = props => {
  const [query, setQuery] = useState('');
  const { dispatch, foundRecipes } = useStoreon('foundRecipes');
  // console.log(foundRecipes);
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
        <Input
          placeholder="Найти блюдо..."
          onChange={e => setQuery(e.target.value)}
          icon={<SearchIcon width="16px" height="16px" fill="#888" />}
        />
      </form>
      <Placeholder
        isError={isError}
        isLoading={isLoading}
        loaderContent={loaderContent}
      >
        {foundRecipes && foundRecipes.length > 0 ? (
          <div class="recipes">
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ' .search': {
    marginBottom: '2rem',
    marginTop: '2rem'
  },
  ' .recipes': {
    marginTop: '3rem',
    display: 'grid',
    gridGap: '3rem',
    alignItems: 'baseline'
  }
};

export default ps(SearchPanel)(style);
