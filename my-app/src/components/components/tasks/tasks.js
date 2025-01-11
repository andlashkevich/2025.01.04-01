import styles from './tasks.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../context';

export const Tasks = ({ delTask, fixTask }) => {
	const { outTask } = useContext(AppContext);
	return (
		<ol className={styles.ol}>
			{outTask.map((it, id) => {
				return (
					<div className={styles.tasks} key={id}>
						<li onClick={fixTask} className={styles.uncheck}>
							{it.task}
						</li>
						<button onClick={delTask} className={styles.del}>
							Удалить
						</button>
					</div>
				);
			})}
		</ol>
	);
};
