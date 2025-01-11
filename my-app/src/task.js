import { AppContext } from './context';
import styles from './task.module.css';
import { useState } from 'react';
import { GetTsk, Buttons, Field, Head, Tasks } from './components';

export function App() {
	const [inTask, setInTask] = useState('');
	const [outTask, setOutTask] = useState([]);
	const [error, setError] = useState(null);
	const [ind, setInd] = useState('');
	const [refresh, setRefresh] = useState(false);
	const setClear = () => {
		setInTask('');
		setError(null);
	};
	GetTsk(inTask, refresh, setOutTask);

	return (
		<AppContext.Provider value={{ inTask, setInTask, outTask, setOutTask }}>
			<div className={styles.wrap}>
				<Head />
				<Field error={error} setClear={setClear} setError={setError} />
				<Buttons
					error={error}
					setError={setError}
					setClear={setClear}
					ind={ind}
				/>
				<Tasks refresh={refresh} setRefresh={setRefresh} setInd={setInd} />
			</div>
		</AppContext.Provider>
	);
}

export default App;
