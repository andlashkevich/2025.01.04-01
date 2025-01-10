import styles from './tasks.module.css';

export const Tasks = ({ delTask, fixTask, outTask }) => (
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
