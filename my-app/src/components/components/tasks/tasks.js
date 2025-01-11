import styles from './tasks.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../context';
import { Delete, Fix } from '../../../components';

export const Tasks = ({ refresh, setRefresh, setInd }) => {
	const { setInTask, outTask } = useContext(AppContext);
	const delTask = (e) => Delete(e, outTask, refresh, setRefresh);
	const fixTask = (e) => Fix(e, outTask, setInd, setInTask);
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
