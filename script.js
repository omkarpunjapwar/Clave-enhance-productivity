//adding New NotePad-->
function addNewListTab() {
  let listButton = document.querySelector(".listButt");
  console.log(listButton);

  listButton.addEventListener("click", () => {
    let NotesJS = document.querySelector(".Notes");
    console.log(NotesJS);
    let NotesTabJS = document.createElement("div");
    NotesTabJS.className = "NotesTab";

    let HeadingJS = document.createElement("div");
    HeadingJS.className = "headingArea";
    HeadingJS.contentEditable = "True";
    HeadingJS.innerText = "Title..";

    let NotePadJS = document.createElement("div");
    NotePadJS.className = "NotePad";
    NotePadJS.contentEditable = "True";
    NotePadJS.innerText = "Start Writting..";

    let saveIconJS = document.createElement("div");
    saveIconJS.className = "saveIcon";
    NotesTabJS.appendChild(HeadingJS);
    NotesTabJS.appendChild(NotePadJS);
    NotesTabJS.appendChild(saveIconJS);
    NotesJS.appendChild(NotesTabJS);
  });
}
addNewListTab(); // adding a new NotePad is Done.

function scrollHorizontally(event) {
  var container = document.querySelector(".Notes");
  container.scrollLeft += event.deltaY * 1; // Adjust scroll speed
  event.preventDefault();
};

//adding New ToDO Tab-->
function addNewToDoTab() {
  let ToDObutton = document.querySelector(".checkButt");
  let ToDoContainerJS = document.querySelector(".ToDoContainer");

  ToDObutton.addEventListener("click", () => {
    let todoTabJS = document.createElement("div");
    todoTabJS.className = "todoTab";
    let ToDoTopJS = document.createElement("div");
    ToDoTopJS.className = "ToDoTop";
    let ToDoHeadingJS = document.createElement("div");
    ToDoHeadingJS.className = "todoHeading";
    ToDoHeadingJS.innerText = "Title...";
    ToDoHeadingJS.contentEditable = "true";
    let ToDoIconsJS = document.createElement("div");
    ToDoIconsJS.className = "ToDoIcons";
    let addListItemDivJS = document.createElement("div");
    addListItemDivJS.className = "addListItemDiv";
    let AddIcon = document.createElement("img");
    AddIcon.className = "addIcon";
    AddIcon.src = "images/CrossIcon.png";
    addListItemDivJS.appendChild(AddIcon);

    let deleteTabDivJS = document.createElement("div");
    deleteTabDivJS.className = "deleteTabDiv";
    let deleteTabIcon = document.createElement("img");
    deleteTabIcon.src = "images/CrossIcon.png";
    deleteTabIcon.className = "deleteTabDivIcon";
    deleteTabDivJS.appendChild(deleteTabIcon);

    let ToDoListJS = document.createElement("div");
    ToDoListJS.className = "TodoList";

    let UL = document.createElement("ul");
    UL.className = "ToDoUl";

    let li = document.createElement("li");
    let deleteButt = document.createElement("div");
    deleteButt.className = "DeleteButt";

    let deleteimg = document.createElement("img");
    deleteimg.className = "DeleteButtIcon";
    deleteimg.src = "images/delete.png";

    deleteButt.appendChild(deleteimg);

    let checkbox2JS = document.createElement("img");
    checkbox2JS.className = "checkBox2";
    checkbox2JS.src = "images/checkSquare.png";

    let TodoTextJS = document.createElement("div");
    TodoTextJS.className = "ToDoText";
    TodoTextJS.contentEditable = "true";
    TodoTextJS.innerText = "sample text...";

    ToDoIconsJS.appendChild(addListItemDivJS);
    ToDoIconsJS.appendChild(deleteTabDivJS);
    ToDoTopJS.appendChild(ToDoHeadingJS);
    ToDoTopJS.appendChild(ToDoIconsJS); //todo top done.

    li.appendChild(deleteButt);
    li.appendChild(checkbox2JS);
    li.appendChild(TodoTextJS); //li is done.
    UL.appendChild(li);
    ToDoListJS.appendChild(UL); // toDolistis done.

    todoTabJS.appendChild(ToDoTopJS);
    todoTabJS.appendChild(ToDoListJS);
    ToDoContainerJS.appendChild(todoTabJS); // complete ToDoTab.
  });

  // Add event listener for the container, listening for clicks on addIcon elements
  ToDoContainerJS.addEventListener("click", function (event) {
    if (event.target.classList.contains("addIcon")) {
      let todoTab = event.target.closest(".todoTab");
      let UL = todoTab.querySelector(".ToDoUl");
      let li = document.createElement("li");
      let deleteButt = document.createElement("div");
      deleteButt.className = "DeleteButt";
      let deleteimg = document.createElement("img");
      deleteimg.src = "images/delete.png";
      deleteimg.className = "DeleteButtIcon";

      let checkBox2JS = document.createElement("img");
      checkBox2JS.className = "checkBox2";
      checkBox2JS.src = "images/checkSquare.png";
      let TodoTextJS = document.createElement("div");
      TodoTextJS.className = "ToDoText";
      TodoTextJS.contentEditable = "true";
      TodoTextJS.innerText = "sample text...";
      deleteButt.appendChild(deleteimg);
      li.appendChild(deleteButt);
      li.appendChild(checkBox2JS);
      li.appendChild(TodoTextJS);
      UL.appendChild(li);
    }
  });

  ToDoContainerJS.addEventListener("click", function (event) {
    if (event.target.classList.contains("checkBox2")) {
      let listItem = event.target.closest("li"); // Find the parent list item
      let checkBox = listItem.querySelector(".checkBox2");
      let todoText = listItem.querySelector(".ToDoText");

      let checkSquareImg = "checkSquare.png";
      let markedCheckBoxImg = "markedCheckBox.png";

      // Extract filenames from src attributes
      let checkBoxSrc = checkBox.src.split("/").pop(); // Extracts the filename from the URL

      if (checkBoxSrc === checkSquareImg) {
        checkBox.src = "images/markedCheckBox.png";
        todoText.style.textDecoration = "line-through";
        todoText.style.opacity = "50%";
      } else if (checkBoxSrc === markedCheckBoxImg) {
        checkBox.src = "images/checkSquare.png";
        todoText.style.textDecoration = "none";
        todoText.style.opacity = "100%";
      }
    }
  });

  ToDoContainerJS.addEventListener("click", function (event) {
    if (event.target.classList.contains("DeleteButtIcon")) {
      let listItem = event.target.closest("li"); // Find the parent list item
      if (listItem) {
        listItem.remove(); // Remove the list item if found
      }
    }
  });
}
addNewToDoTab();

// to delete the todo Tab

let ToDoContainerJS = document.querySelector(".ToDoContainer");

ToDoContainerJS.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteTabDivIcon")) {
    let ToDoTab = event.target.closest(".todoTab"); // Find the parent Tab item
    if (ToDoTab) {
      ToDoTab.remove(); // Remove the Tab if found
    }
  }
});

//new tab added.


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
  ListNavButt.addEventListener("click", (event) => {
    ToDoSection.style.display = "none";
    LoginPage.style.display = "none";
    NotesSection.style.display = "flex";

    NotesSection.style.flexWrap = "wrap";

    NotesSection.style.overflowY = "auto";
  });
}
SPAToggle();


