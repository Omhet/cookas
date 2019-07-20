import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import ThemeProvider from 'cxs/ThemeProvider';
import StoreContext from 'storeon/preact/context';
import { store } from './store';
import './style';
import theme from './theme'
import SearchPanel from './components/SearchPanel';
import RecipeModal from './components/RecipeModal';

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
      <ThemeProvider theme={theme}>
        <SearchPanel />
        <RecipeModal />
      </ThemeProvider>
    </StoreContext.Provider>
  );
}
