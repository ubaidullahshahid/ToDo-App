var userValue = document.querySelector("#todoInput");
var editContainer = document.querySelector("#edit-input");
var toDoList = document.querySelector(".todo-list");
var getData = JSON.parse(localStorage.getItem("todo-actions")) || [];
var set = JSON.parse(localStorage.getItem("index-No")) || [];
onloadeddata();
function onloadeddata() {
  var newData = "";
  getData.forEach((element, index) => {
    newData += `       
  <div class="todo-item">
   <div><span class="todo-text">${index + 1}.</span>
   <span class="todo-text">${element}</span></div>
   <div class="todo-actions">
     <button onclick="handleEdit(${index})"><i class="far fa-edit" style="color: #0C680D;"></i></button>
     <button onclick="deleteData(${index})" class="delete">
     <i class="far fa-trash-alt" style="color: red;"></i></button>
   </div>
   </div>`;
    toDoList.innerHTML = newData;
  });
}
function addData() {
  var getUserValue = userValue.value;
  if (getUserValue) {
    getData.push(getUserValue);
    localStorage.setItem("todo-actions", JSON.stringify(getData));
    onloadeddata();
  } else {
    alert("Please enter a value");
  }
  userValue.value = "";
}

function deleteData(index) {
  getData.splice(index, 1);
  onloadeddata();
  localStorage.setItem("todo-actions", JSON.stringify(getData));
  window.location.reload();
}

function handleEdit(index, element) {
  var editValue;
  editValue = `
  <input type="text"  id="edit-data"value=${getData[index]}>
  <button  id="addTodoBtn" onclick="editData(${index})"><i class="far fa-edit"></i> Edit</button>
  `;
  editContainer.innerHTML = editValue;
}

function editData(index) {
  var editValue = document.querySelector("#edit-data").value;
  getData[index] = editValue;
  onloadeddata();
  localStorage.setItem("todo-actions", JSON.stringify(getData));
  window.location.reload();
}
