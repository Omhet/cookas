import StoreContext from 'storeon/preact/context';
import { store } from './store';
import './style';
import Card from './components/Card';

export default function App() {
		return (
			<StoreContext.Provider value={store}>
			<div>
				<h1>Hello, World!!!</h1>
				<Card />
			</div>
			</StoreContext.Provider>
		);
}
