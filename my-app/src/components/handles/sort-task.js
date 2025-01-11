// import { useContext } from 'react';
// import { AppContext } from '../../context';

export const Sort = (outTask, setOutTask) => {
	// const { outTask } = useContext(AppContext);
	// const [outTask, setOutTask] = ouT;
	setOutTask(
		[...outTask].sort((a, b) =>
			a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1,
		),
	);
};
