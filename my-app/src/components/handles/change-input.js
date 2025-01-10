export const InpChg = ({ target }, outTask, setError, setInTask) => {
	let error = null;
	setInTask(target.value);
	if (outTask.find((it) => it.task === target.value))
		error = 'Такая задача уже существует';
	if (target.value.length > 100) error = 'Слишком длинная задача';
	setError(error);
};
