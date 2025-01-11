import { useContext } from 'react';
import { AppContext } from '../../../context';
import styles from './buttons.module.css';
import { Create, Find, Sort, Update } from '../../../components';

export const Buttons = ({ error, setError, setClear, ind }) => {
	const { inTask, outTask, setOutTask } = useContext(AppContext);
	const sortTask = () => Sort(outTask, setOutTask);
	const findTask = () => Find(inTask, outTask, setError, setOutTask);
	const createTask = () => Create(inTask, setClear);
	const updTask = () => Update(ind, inTask, setClear);
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
