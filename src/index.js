import { h } from 'preact';
import StoreContext from 'storeon/preact/context';
import { store } from './store';
import './style';
import SearchPanel from './components/SearchPanel';
import RecipeModal from './components/RecipeModal';

export default function App() {
		return (
			<StoreContext.Provider value={store}>
					<SearchPanel />
					<RecipeModal />
			</StoreContext.Provider>
		);
}
