import { useContext } from 'react';
import { AppContext } from '../../../context';
import styles from './buttons.module.css';
import { Create, Find, Sort, Update } from '../../../components';

export const Buttons = ({ error, setError, ind }) => {
	const { inTask, setInTask, outTask, setOutTask } = useContext(AppContext);
	const sortTask = () => Sort(outTask, setOutTask);
	const findTask = () => Find(inTask, outTask, setError, setOutTask);
	const createTask = () => Create(inTask, setError, setInTask);
	const updTask = () => Update(ind, inTask, setError, setInTask);
	return (
		<div className={styles.buttons}>
			<button
				disabled={!inTask || error}
				className={styles.сButton}
				onClick={createTask}
			>
				Добавить
			</button>
			<button disabled={!outTask} onClick={sortTask} className={styles.sButton}>
				Упорядочить
			</button>
			<button disabled={!inTask} onClick={findTask} className={styles.fButton}>
				Найти
			</button>
			<button
				disabled={!inTask || error}
				onClick={updTask}
				className={styles.uButton}
			>
				Изменить
			</button>
		</div>
	);
};
