var userValue = document.querySelector("#todoInput");
var toDoList = document.querySelector(".todo-list");
var getData = JSON.parse(localStorage.getItem("todo-actions")) || [];
var set = JSON.parse(localStorage.getItem("index-No")) || [];

function addData() {
  var getUserValue = userValue.value;
  getData.push(getUserValue);
  localStorage.setItem("todo-actions", JSON.stringify(getData));
  if (getUserValue) {
    var newData = document.createElement("div");
    newData.innerHTML = `       
     <div class="todo-item">
      <span class="todo-text">${getUserValue}</span>
      <div class="todo-actions">
        <button><i class="far fa-edit"></i></button>
        <button onclick="deleteData()" class="delete">
        <i class="far fa-trash-alt" ></i></button>
      </div>
    </div>`;
    // var todoText= document.querySelector(".todo-text");
    // todoText.innerHTML = getData ;
    // set.push(newData)

    // localStorage.setItem("index-No", JSON.stringify(newData));
    toDoList.appendChild(newData);
  } else {
    alert("Please enter a value");
  }
  userValue.value = "";
}

function deleteData() {
  var deleteData = document.querySelector(".delete");
  deleteData.addEventListener("click", function () {
    deleteData.parentElement.parentElement.remove();
  });
}
