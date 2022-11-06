import ItemsLine from './ItemsLine';
import AddItem from './AddItem';

const RetrieveItems = ({ getItems, setGetItems, items, setItems }) => {
	return (
		<>
			<section className="tasks-container">
				{/* check if items changed or not (ex status of checkbox of added/deleted items )  */}
				{items ? (
					items.map((tasks, index) => {
						return <ItemsLine key={index} tasks={tasks} getItem={setGetItems} setItems={setItems}></ItemsLine>;
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
