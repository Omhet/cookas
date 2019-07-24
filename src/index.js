import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import ThemeProvider from 'cxs/ThemeProvider';
import StoreContext from 'storeon/preact/context';
import { store } from './store';
import './style';
import basicTheme from './themes/basic'
import darkTheme from './themes/dark'
import SearchPanel from './components/SearchPanel';
import RecipeModal from './components/RecipeModal/RecipeModal';
import { injectStyle } from './utils/injectStyle';


const MainWrapperComponent = props => {
  const { classes } = props;
  return <div class={classes.main}>
    <SearchPanel />
    <RecipeModal />
  </div>
}

const style = ({ colors: { text, back } }) => ({
  main: {
    color: text.primary,
    backgroundColor: back.primary,
    minHeight: '100vh'
  }
});

const MainWrapper = injectStyle(style)(MainWrapperComponent);


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
      <ThemeProvider theme={basicTheme}>
        <MainWrapper />
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

