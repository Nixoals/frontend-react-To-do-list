import { useState } from 'react';
import axios from 'axios';
import ItemsLine from './ItemsLine';

import AddItem from './AddItem';

const RetrieveItems = () => {
	const [getItems, setGetItems] = useState(true);
	const [items, setItems] = useState();

	const loadItems = async () => {
		setGetItems(false);
		const element = await axios.get('https://site--to-do-list--gsmxcbzt8tzm.code.run/task');
		const newtab = [...element.data];
		setItems(newtab);
	};
	if (getItems) {
		loadItems();
	}
	return (
		<>
			<section className="tasks-container">
				{items ? (
					items.map((tasks, index) => {
						return <ItemsLine key={index} tasks={tasks} getItem={setGetItems}></ItemsLine>;
					})
				) : (
					<></>
				)}
			</section>
			<AddItem refresh={setGetItems} value={getItems}></AddItem>
		</>
	);
};

export default RetrieveItems;
