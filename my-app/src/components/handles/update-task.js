export const Update = (ind, inTask, setError, setInTask) => {
	fetch(`http://localhost:3003/tasks/${ind}`, {
		method: 'PUT',
		body: JSON.stringify({ task: inTask }),
		headers: {
			'content-Type': 'application/json; charset=utf-8',
		},
	}).finally(() => {
		setInTask('');
		setError(null);
	});
};
