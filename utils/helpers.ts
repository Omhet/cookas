import { useEffect, useState } from "preact/hooks";
import { showcaseUrl } from "./consts";

export function getRecipesSearchUrl(query: string) {
  return `https://recipes-search.glitch.me/search?q=${query}`;
}

export function getRecipeUrl(recipeUrl: string) {
  return `https://recipes-search.glitch.me/recipe?url=${recipeUrl}`;
}

export async function fetchShowcaseRecipes() {
  return await fetchData(showcaseUrl);
}

export async function fetchData(url: string) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const useDataApi = (
  initialUrl: string,
  initialData: any,
  isLoadOnMount = false
) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => setDidMount(true), []);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(url);
        const json = await result.json();
        setData(json);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    // console.log(didMount || isLoadOnMount);
    if (didMount || isLoadOnMount) {
      fetchData();
    }
  }, [url]);

  const doFetch = (url: string) => {
    setUrl(url);
  };

  return { data, isLoading, isError, doFetch };
};
