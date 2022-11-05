import { useState } from 'react';
import axios from 'axios';

const AddItem = ({ refresh, value }) => {
	const [item, setItem] = useState('');

	const sendItem = async (event) => {
		refresh(!value);
		// const url = 'https://site--to-do-list--gsmxcbzt8tzm.code.run/task';
		const url = 'https://site--to-do-list--gsmxcbzt8tzm.code.run/task';
		await axios.post(url, { task: item });

		return refresh(!value);
	};

	return (
		<>
			<section className="add-items">
				<form
					onSubmit={(event) => {
						sendItem();
						event.preventDefault();
					}}
				>
					<input
						onChange={(event) => {
							setItem(event.target.value);
						}}
						type={'text'}
						value={item}
						placeholder={'new task'}
					></input>
					<button type="submit">Add task</button>
				</form>
			</section>
		</>
	);
};

export default AddItem;
