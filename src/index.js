import { h } from 'preact';
import StoreContext from 'storeon/preact/context';
import { store } from './store';
import './style';
import SearchPanel from './components/SearchPanel';
import RecipeModal from './components/RecipeModal';
import { useEffect } from 'preact/hooks';

export default function App() {
  useEffect(() => {
    console.log('app landed');

    const splash = document.getElementsByClassName('splash')[0];
    if (splash) {
      splash.classList.remove('active');
    }
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <SearchPanel />
      <RecipeModal />
    </StoreContext.Provider>
  );
}
