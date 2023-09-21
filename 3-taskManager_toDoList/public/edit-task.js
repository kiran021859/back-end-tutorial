const taskIDDOM = document.querySelector('.task-edit-id');
const taskNameDOM = document.querySelector('.task-edit-name');
const taskCompletedDOM = document.querySelector('.task-edit-completed');
const editFormDOM = document.querySelector('.single-task-form');
const editBtnDOM = document.querySelector('.task-edit-btn');
const formAlertDOM = document.querySelector('.form-alert');
const params = new URLSearchParams(window.location.search); 
const id = params.get('id'); 
let tempName;

const showTask = async () => {
  try {
    const response = await axios.get(`/api/v1/tasks/${id}`);
    const { _id: taskID, completed, name } = response.data.task;

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    tempName = name;
    taskCompletedDOM.checked = completed; 
  } catch (error) {
    console.error(error);
  }
};

showTask();

editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...';
  e.preventDefault();
  try {
    const taskName = taskNameDOM.value;
    const taskCompleted = taskCompletedDOM.checked;

    const response = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    });
    console.log(response.data);
    const { _id: taskID, completed, name } = response.data.task;

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    tempName = name;
    taskCompletedDOM.checked = completed;

    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'Success, edited task';
    formAlertDOM.classList.add('text-success');
  } catch (error) {
    console.error(error);
    taskNameDOM.value = tempName;
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'Error, please try again';
  } finally {
    editBtnDOM.textContent = 'Edit';
    setTimeout(() => {
      formAlertDOM.style.display = 'none';
      formAlertDOM.classList.remove('text-success');
    }, 3000);
  }
});
