window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();//prevent refresh clear data
		document.getElementsByClassName('task-list')[0].style.display='block';

		var task = input.value;//task value

		const task_el = document.createElement('div');//Creating div
		task_el.classList.add('task');//adding text of task

		const task_content_el = document.createElement('div');//Creating div
		task_content_el.classList.add('content');//Adding input content

		task_el.appendChild(task_content_el);//Creating copy of div

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

        const task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerText = 'Done';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_done_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_done_el.addEventListener('click', (e)=>{
			const list_el = document.querySelector("#done_tasks");
			e.preventDefault();//prevent refresh clear data

			document.getElementsByClassName('task-list-done')[0].style.display='block';
			// document.getElementsByClassName('done_task').style.display='flex';
			// document.getElementById('done_tasks').style.display='flex';

		const task_el = document.createElement('div');//Creating div
		task_el.classList.add('done_task');//adding text of task//

		const task_content_el = document.createElement('div');//Creating div
		task_content_el.classList.add('done_content');//Adding input content//

		task_el.appendChild(task_content_el);//Creating copy of div

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		 const task_actions_el = document.createElement('div');
		 task_actions_el.classList.add('actions');

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});