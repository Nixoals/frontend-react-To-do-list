import axios from 'axios';

const ItemsLine = ({ tasks, getItem }) => {
	//Delete Item from the Database
	const handleDelete = async () => {
		const url = 'https://site--to-do-list--gsmxcbzt8tzm.code.run/delete-task/' + tasks._id;
		// const url = 'http://localhost:8080/delete-task/' + tasks._id;
		await axios.delete(url);
		return getItem(true);
	};
	//change status on the Database and rerender App component
	const handleCheckItems = async () => {
		const newState = !tasks.checked;
		const url = `https://site--to-do-list--gsmxcbzt8tzm.code.run/task-checked/${tasks._id}/${newState}`;
		// const url = `http://localhost:8080/task-checked/${tasks._id}/${newState}`;
		await axios.post(url);
		return getItem(true);
	};
	return (
		<>
			<section className="line-items">
				<div className="checkbox-wrapper">
					{/* onChange attribute instead of onClick */}
					<input className={`checkbox`} onChange={handleCheckItems} type="checkbox" checked={tasks.checked} />
				</div>
				<div id={tasks._id} className={tasks.checked ? 'task-done' : ''}>
					{tasks.task}
				</div>
				<button className="delete" onClick={handleDelete}>
					<svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M23.625 1.74983H17.0625L16.5484 0.72717C16.4395 0.508537 16.2718 0.324628 16.0641 0.196132C15.8564 0.0676358 15.6169 -0.000348697 15.3727 -0.000173517H9.12187C8.87818 -0.00111034 8.63914 0.0666207 8.43216 0.19526C8.22518 0.323899 8.05862 0.508242 7.95156 0.72717L7.4375 1.74983H0.875C0.642936 1.74983 0.420376 1.84201 0.256282 2.00611C0.0921872 2.1702 0 2.39276 0 2.62483L0 4.37483C0 4.60689 0.0921872 4.82945 0.256282 4.99355C0.420376 5.15764 0.642936 5.24983 0.875 5.24983H23.625C23.8571 5.24983 24.0796 5.15764 24.2437 4.99355C24.4078 4.82945 24.5 4.60689 24.5 4.37483V2.62483C24.5 2.39276 24.4078 2.1702 24.2437 2.00611C24.0796 1.84201 23.8571 1.74983 23.625 1.74983ZM2.90937 25.5389C2.95111 26.2053 3.24524 26.8308 3.73191 27.288C4.21857 27.7452 4.86117 27.9997 5.52891 27.9998H18.9711C19.6388 27.9997 20.2814 27.7452 20.7681 27.288C21.2548 26.8308 21.5489 26.2053 21.5906 25.5389L22.75 6.99983H1.75L2.90937 25.5389Z"
							fill="#5C48D3"
						/>
					</svg>
				</button>
			</section>
		</>
	);
};

export default ItemsLine;
