var userValue = document.querySelector("#todoInput");
var toDoList = document.querySelector(".todo-list");
var getData = JSON.parse(localStorage.getItem("todo-actions")) || [];
var set = JSON.parse(localStorage.getItem("index-No")) || [];
onloadeddata();
function onloadeddata() {
  var newData = "";
  getData.forEach((element, index) => {
    console.log("element", element);
    newData += `       
  <div class="todo-item">
   <div><span class="todo-text">${index + 1}</span>
   <span class="todo-text">${element}</span></div>
   <div class="todo-actions">
     <button><i class="far fa-edit"></i></button>
     <button onclick="deleteData(${index})" class="delete">
     <i class="far fa-trash-alt" ></i></button>
   </div>
   </div>`;
    toDoList.innerHTML = newData;
  });
}
function addData() {
  var getUserValue = userValue.value;
  getData.push(getUserValue);
  localStorage.setItem("todo-actions", JSON.stringify(getData));
  if (getUserValue) {
    onloadeddata();
    // var todoText= document.querySelector(".todo-text");
    // todoText.innerHTML = getData ;
    // set.push(newData)

    // localStorage.setItem("index-No", JSON.stringify(newData));
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
