//adding New NotePad-->
function addNewListTab() {
  let listButton = document.querySelector(".listButt");
  console.log(listButton);

  listButton.addEventListener("click", () => {
    let NotesJS = document.querySelector(".Notes");
    console.log(NotesJS);
    let NotesTabJS = document.createElement("div");
    NotesTabJS.className = "NotesTab";

    let HeadingJS = document.createElement("textarea");
    HeadingJS.className = "headingArea";
    HeadingJS.placeholder = "Title";

    let NotePadJS = document.createElement("textarea");
    NotePadJS.className = "NotePad";
    NotePadJS.placeholder = "Start Writing...";

    let saveIconJS = document.createElement("div");
    saveIconJS.className = "saveIcon";
    NotesTabJS.appendChild(HeadingJS);
    NotesTabJS.appendChild(NotePadJS);
    NotesTabJS.appendChild(saveIconJS);
    NotesJS.appendChild(NotesTabJS);
  });
}
addNewListTab(); // adding a new NotePad is Done.

//adding New ToDO List-->
function addNewToDoTab() {
  let ToDObutton = document.querySelector(".checkButt");
  // console.log(ToDObutton);
  let ToDoContainerJS = document.querySelector(".ToDoContainer");

  ToDObutton.addEventListener("click", () => {
    // console.log("inside the click event");

    let todoTabJS = document.createElement("div");
    todoTabJS.className = "todoTab";
    let ToDoHeadingJS = document.createElement("div");
    ToDoHeadingJS.className = "todoHeading";
    ToDoHeadingJS.innerText = "Title...";
    ToDoHeadingJS.contentEditable = "true";
    // ToDoHeadingJS.aria-placeholder = "Title";
    // ToDoHeadingJS.innerText("Title...");
    let ToDoListJS = document.createElement("div");
    ToDoListJS.className = "TodoList";
    let UL = document.createElement("ul");
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    let TodoTextJS = document.createElement("div");
    TodoTextJS.className = "ToDoText";
    TodoTextJS.contentEditable = "true";
    TodoTextJS.innerText = "sample text...";
    li.appendChild(input);
    li.appendChild(TodoTextJS);
    UL.appendChild(li);
    ToDoListJS.appendChild(UL);
    todoTabJS.appendChild(ToDoHeadingJS);
    todoTabJS.appendChild(ToDoListJS);
    ToDoContainerJS.appendChild(todoTabJS);
  });

  // Adding list items ------>
  ToDoContainerJS = document.querySelector(".ToDoContainer");
  console.log(ToDoContainerJS);
  todoTabJS = document.querySelectorAll(".todoTab");
  console.log(todoTabJS);

  TodoTextJS = document.querySelectorAll(".ToDoText");
  console.log("this is listItems", TodoTextJS);

  todoTabJS.forEach(function (todoTab) {
    TodoTextJS.forEach(function (li) {
      li.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault(); //prevent the default behavior of adding a new line.
          // console.log("Enter key pressed.");
          let ToDoListJS = document.querySelector(".TodoList");
          let UL = document.querySelector(".TodoList ul");
          let li = document.createElement("li");
          let input = document.createElement("input");
          input.type = "checkbox";
          let TodoTextJS = document.createElement("div");
          TodoTextJS.className = "ToDoText";
          TodoTextJS.contentEditable = "true";
          TodoTextJS.innerText = "sample text...";
          li.appendChild(input);
          li.appendChild(TodoTextJS);
          UL.appendChild(li);
          ToDoListJS.appendChild(UL);
        }
      });
    });
  });
}
addNewToDoTab();

// function for SPA ---->

function SPAToggle() {
  let LoginPage = document.querySelector(".LoginDiv");
  let NotesSection = document.querySelector(".Notes");
  let ToDoSection = document.querySelector(".ToDoContainer");
  let ProfileNavButt = document.querySelector("#profileNavButt");
  let HomeNavButt = document.querySelector("#homeNavButt");
  let ToDoNavButt = document.querySelector("#todoNavButt");
  let ListNavButt = document.querySelector("#listNavButt");
  // console.log(ProfileIcon)

  ProfileNavButt.addEventListener("click", () => {
    NotesSection.style.display = "none";
    ToDoSection.style.display = "none";
    LoginPage.style.display = "flex";
  });
  HomeNavButt.addEventListener("click", () => {
    //  console.log("hehehe")
    LoginPage.style.display = "none";
    NotesSection.style.display = "flex";
    ToDoSection.style.display = "flex";
  });
  ToDoNavButt.addEventListener("click", () => {
    NotesSection.style.display = "none";
    LoginPage.style.display = "none";
    ToDoSection.style.display = "flex";
  });
  ListNavButt.addEventListener("click", () => {
    ToDoSection.style.display = "none";
    LoginPage.style.display = "none";
    NotesSection.style.display = "flex";
  });
}
SPAToggle();
