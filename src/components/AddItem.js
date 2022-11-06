import { useState } from 'react';
import axios from 'axios';

const AddItem = ({ refresh, value }) => {
	const [item, setItem] = useState('');

	const sendItem = async (event) => {
		const newState = !value;
		const url = 'https://site--to-do-list--gsmxcbzt8tzm.code.run/task';
		// const url = 'http://localhost:8080/task';
		await axios.post(url, { task: item, checked: false });
		return refresh(newState);
	};

	return (
		<>
			<section className="add-items">
				<form
					onSubmit={(event) => {
						setItem('');
						event.preventDefault();
						sendItem();
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
