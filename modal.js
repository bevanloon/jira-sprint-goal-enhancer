function toggleModal() {
  const enhanceSprintGoalElem = document.getElementById('enhanceSprintGoals');
  if (enhanceSprintGoalElem.style.display === 'none') {
    enhanceSprintGoalElem.style.display = 'block';
  } else {
    enhanceSprintGoalElem.style.display = 'none';
  }
}
function createOrToggle() {
  const enhanceSprintGoalElem = document.getElementById('enhanceSprintGoals');
  if (enhanceSprintGoalElem === null) {
    createModal();
  } else {
    toggleModal();
  }
}

function createHeading() {
  const headingContainer = document.createElement('div');
  headingContainer.className = 'modal-header';
  const heading = document.createElement('h1');
  heading.innerHTML = "Sprint Goals";
  const close = document.createElement('span');
  close.innerHTML = '✕';
  close.className = 'closeButton';
  close.onclick = function(){document.getElementById('enhanceSprintGoals').style.display = 'none'; };
  headingContainer.appendChild(heading);
  headingContainer.appendChild(close);
  return headingContainer;
}

function createModal() {
  const newModal = document.createElement('div');
  newModal.className = 'modal';
  newModal.id = 'enhanceSprintGoals';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  modalContent.appendChild(createHeading());

  let sprintGoals = document.getElementsByClassName("ghx-sprint-goal")[0].innerText;
  let sprintGoalTitle = document.body.querySelector(".ghx-sprint-goal > span").getAttribute("title")

  let sprintGoalsArray = [];
  sprintGoalsArray = sprintGoalTitle.split("\n");

  const modalText = document.createTextNode(sprintGoals);
  for(const para of sprintGoalsArray) {
    const newP = document.createElement('p');
    newP.innerHTML = para;
    modalContent.appendChild(newP);
  }
  newModal.appendChild(modalContent);

  document.body.appendChild(newModal);
}
createOrToggle();
