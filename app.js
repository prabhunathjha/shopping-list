let items = [];
const newItemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

function renderList() {
  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    li.dataset.index = index;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => deleteItem(index);
    li.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = () => editItem(index);
    li.appendChild(editButton);

    list.appendChild(li);
  });
}

function addItem() {
  const newItem = newItemInput.value.trim();

  if (newItem !== "") {
    items.push(newItem);
    newItemInput.value = "";
    renderList();
  }
}

function editItem(index) {
  const item = items[index];
  const newItem = prompt("Edit item:", item);

  if (newItem !== null && newItem !== "") {
    items[index] = newItem;
    renderList();
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}

function handleEnterKey(event) {
    if (event.keyCode === 13) { 
      addItem();
    }
  }
  

addButton.addEventListener("click", addItem);
newItemInput.addEventListener("keydown", handleEnterKey);
renderList();
 
