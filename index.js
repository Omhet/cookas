import StoreContext from 'storeon/preact/context';
import { store } from './store';
import './style';
import SearchPanel from './components/SearchPanel';

export default function App() {
		return (
			<StoreContext.Provider value={store}>
			<div>
				<SearchPanel />
			</div>
			</StoreContext.Provider>
		);
}
