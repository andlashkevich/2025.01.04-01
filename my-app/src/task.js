import { AppContext } from './context';
import styles from './task.module.css';
import { useState } from 'react';
import { Create, Delete, Find, Fix, GetTsk, InpChg, Sort, Update } from './components';
import { Buttons, Field, Head, Tasks } from './components';

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
	const inputChange = ({ target }) => InpChg({ target }, outTask, setError, setInTask);
	const fixTask = (e) => Fix(e, outTask, setInd, setInTask);
	const sortTask = () => Sort(outTask, setOutTask);
	const findTask = () => Find(inTask, outTask, setError, setOutTask);
	const createTask = () => Create(inTask, setClear);
	const updTask = () => Update(ind, inTask, setClear);
	const delTask = (e) => Delete(e, outTask, refresh, setRefresh);

	return (
		<AppContext.Provider>
			<div className={styles.wrap}>
				<Head />
				<Field
					error={error}
					inTask={inTask}
					inputChange={inputChange}
					setClear={setClear}
				/>
				<Buttons
					error={error}
					inTask={inTask}
					outTask={outTask}
					createTask={createTask}
					findTask={findTask}
					sortTask={sortTask}
					updTask={updTask}
				/>
				<Tasks delTask={delTask} fixTask={fixTask} outTask={outTask} />
			</div>
		</AppContext.Provider>
	);
}

export default App;
