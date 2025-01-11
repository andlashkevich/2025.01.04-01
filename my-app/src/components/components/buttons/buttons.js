import { useContext } from 'react';
import { AppContext } from '../../../context';
import styles from './buttons.module.css';

export const Buttons = ({ error, createTask, findTask, sortTask, updTask }) => {
	const { inTask, outTask } = useContext(AppContext);
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
