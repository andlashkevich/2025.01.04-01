export const Find = (inTask, outTask, setError, setOutTask) => {
	let a = [];
	a = outTask.filter((it) => it.task.includes(inTask));
	inTask && a.length > 0 ? setOutTask(a) : setError('Поиск не дал результатов');
};