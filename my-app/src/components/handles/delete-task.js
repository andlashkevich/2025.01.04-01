export const Delete = (e, outTask, refresh, setRefresh,) => {
	let id = outTask.find(
		(it) => it.task === e.target.previousElementSibling.innerText,
	).id;
	fetch(`http://localhost:3003/tasks/${id}`, {
		method: 'DELETE',
	});
	setRefresh(!refresh);
};
