import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import RetrieveItems from './components/RetrieveItems';

function App() {
	const [getItems, setGetItems] = useState(true);
	const [items, setItems] = useState([]);

	useEffect(() => {
		// useEffect help rerender the componenet app when items are added or items are checked

		const loadItems = async () => {
			const element = await axios.get('https://site--to-do-list--gsmxcbzt8tzm.code.run/task');
			// const element = await axios.get('http://localhost:8080/task');
			//split the array in order to put all checked items at the bottom
			const tabChecked = []; //filled with checked items
			const tabUnchecked = []; //filled with unckecked items
			for (let i = 0; i < element.data.length; i++) {
				if (element.data[i].checked) {
					tabChecked.push(element.data[i]);
				} else {
					tabUnchecked.push(element.data[i]);
				}
			}
			const newTab = tabUnchecked.concat(tabChecked);
			setItems(newTab);
			return setGetItems(false);
		};
		loadItems();
	}, [getItems]);
	return (
		<>
			<Header></Header>
			<RetrieveItems getItems={getItems} setGetItems={setGetItems} items={items} setItems={setItems}></RetrieveItems>
		</>
	);
}

export default App;
