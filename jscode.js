
const addButton = document.getElementById("add-topic-button");
const addButtonTwo = document.getElementById("add-topic-button-two");
const modal = document.getElementById("topic-modal");
const closeButton = document.getElementById("close-modal");
const cancelButton = document.getElementById("cancel-modal");

addButton.onclick = function () {
    modal.hidden = false;
};

addButtonTwo.onclick = function () {
    modal.hidden = false;
};

closeButton.onclick = function () {
    modal.hidden = true;
};

cancelButton.onclick = function () {
    modal.hidden = true;
};
