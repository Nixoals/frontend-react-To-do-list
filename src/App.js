import './App.css';

import Header from './components/Header';
import RetrieveItems from './components/RetrieveItems';

function App() {
	return (
		<>
			<Header></Header>
			{/* request mongoDB get */}
			<RetrieveItems></RetrieveItems>
			{/* add items */}
		</>
	);
}

export default App;
