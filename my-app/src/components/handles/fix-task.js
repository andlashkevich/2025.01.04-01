export const Fix = (e, outTask, setInd, setInTask) => {
		setInTask(e.target.innerText);
		let id = outTask.find((it) => it.task === e.target.innerText).id;
		setInd(id);
	};
