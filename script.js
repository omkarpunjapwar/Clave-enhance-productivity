//adding New NotePad-->
function addNewListTab() {
  let listButton = document.querySelector(".listButt");
  console.log(listButton);

  listButton.addEventListener("click", () => {
    let NotesJS = document.querySelector(".Notes");
    let NotesTabJS = document.createElement("div");
    NotesTabJS.className = "NotesTab";
    NotesTabJS.style.order = "-1";

    let TopDivNT = document.createElement("div");
    TopDivNT.className = "topDivNT";
    let NtIconsdiv = document.createElement("div");
    NtIconsdiv.className = "NTiconsDiv";

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
    console.log(saveIconJS);
    let MaximizeJS = document.createElement("div");
    MaximizeJS.className = "maximize";
    let minimizeJS = document.createElement("div");
    minimizeJS.className = "minimize";
    let deleteNoteJS = document.createElement("div");
    deleteNoteJS.className = "DeleteNote";

    NtIconsdiv.appendChild(saveIconJS);
    NtIconsdiv.appendChild(MaximizeJS);
    NtIconsdiv.appendChild(minimizeJS);
    NtIconsdiv.appendChild(deleteNoteJS);
    TopDivNT.appendChild(HeadingJS);
    TopDivNT.appendChild(NtIconsdiv);
    NotesTabJS.appendChild(TopDivNT);
    NotesTabJS.appendChild(NotePadJS);
    NotesJS.appendChild(NotesTabJS);
  });
}
addNewListTab(); // adding a new NotePad is Done.

let NotesJS = document.querySelector(".Notes");

NotesJS.addEventListener("click", function (event) {
  if (event.target.classList.contains("DeleteNote")) {
    let NotesTab = event.target.closest(".NotesTab"); // Find the parent Tab item
    if (NotesTab) {
      NotesTab.remove(); // Remove the Tab if found
    }
  }
});

// Get the contenteditable div

// Add event listener for paste event
NotesJS.addEventListener("paste", function (event) {
  // Prevent the default paste action
  event.preventDefault();
  if (event.target.classList.contains("NotePad")) {
    // Get the plain text representation of the clipboard data
    var text = (event.originalEvent || event).clipboardData.getData(
      "text/plain"
    );

    // Insert the plain text into the contenteditable div
    document.execCommand("insertText", false, text);
  }
});

// to delete Note Tab---->

// To Scroll Horizontally NoteTabs---------->
var Notescontainer = document.querySelector(".Notes");
Notescontainer.onwheel = (event) => {
  Notescontainer.scrollLeft += event.deltaY * 1; // Adjust scroll speed
  event.preventDefault();
};

// To maximize The Note Tab----->

NotesJS.addEventListener("click", function (event) {
  if (event.target.classList.contains("maximize")) {
    let NotesTab = event.target.closest(".NotesTab"); // Find the parent Tab item
    if (NotesTab) {
      let ToDoContainerJS = document.querySelector(".ToDoContainer");

      let NotePadJS = NotesTab.querySelector(".NotePad");
      let ToDoTopJS = NotesTab.querySelector(".topDivNT");
      let ToDoIcons = NotesTab.querySelector(".NTiconsDiv");
      let headingJS = NotesTab.querySelector(".headingArea");
      let saveIconJS = NotesTab.querySelector(".saveIcon");
      let maximizeJS = NotesTab.querySelector(".maximize");
      let minimizeJS = NotesTab.querySelector(".minimize");
      let deleteNoteJS = NotesTab.querySelector(".DeleteNote");

      ToDoContainerJS.style.display = "none";
      NotesJS.style.width = "100%";
      NotesJS.style.display = "flex";
      NotesJS.style.marginTop = "0";
      NotesJS.style.padding = "0";
      NotesJS.style.overflow = "clip";
      NotesTab.style.order = "-2";
      NotesTab.style.minWidth = "93vw";
      NotesTab.style.height = "89vh";
      NotesTab.style.margin = "0";
      NotesTab.style.border = "none";
      NotePadJS.style.width = "85vw";
      NotePadJS.style.height = "70vh";
      ToDoIcons.style.width = "8em";
      ToDoIcons.style.paddingRight = "8em";

      saveIconJS.style.width = "25px";
      saveIconJS.style.height = "25px";
      deleteNoteJS.style.width = "25px";
      deleteNoteJS.style.height = "25px";
      headingJS.style.width = "50em";

      maximizeJS.style.display = "none";
      minimizeJS.style.display = "flex";
      minimizeJS.classList.add("flag");

      // To scroll vertically within the NotePad
      NotePadJS.onwheel = (event) => {
        NotePadJS.scrollTop += event.deltaY * 1; // Adjust scroll speed
        event.preventDefault();
      };
    }
  }
});

// To minimize The Note Tab----->

NotesJS.addEventListener("click", function (event) {
  if (event.target.classList.contains("minimize")) {
    let NotesTab = event.target.closest(".NotesTab"); // Find the parent Tab item
    if (NotesTab) {
      let ToDoContainerJS = document.querySelector(".ToDoContainer");

      let NotePadJS = NotesTab.querySelector(".NotePad");
      let ToDoTopJS = NotesTab.querySelector(".topDivNT");
      let ToDoIcons = NotesTab.querySelector(".NTiconsDiv");
      let headingJS = NotesTab.querySelector(".headingArea");
      let saveIconJS = NotesTab.querySelector(".saveIcon");
      let maximizeJS = NotesTab.querySelector(".maximize");
      let minimizeJS = NotesTab.querySelector(".minimize");
      let deleteNoteJS = NotesTab.querySelector(".DeleteNote");

      ToDoContainerJS.style.display = "grid";
      NotesJS.style.display = "flex";
      NotesJS.style.width = "80em";
      NotesJS.style.marginTop = "1em";
      NotesJS.style.padding = "1em";
      NotesJS.style.overflowX = "scroll";
      NotePadJS.style.overflowX = "clip";
      NotesTab.style.removeProperty("order");
      NotesTab.style.minWidth = "21em";
      NotesTab.style.height = "10em";
      NotesTab.style.margin = "0em 1.3em";
      NotesTab.style.border = "1px solid rgba(255, 255, 255, 0.121)";
      NotePadJS.style.width = "26em";
      NotePadJS.style.height = "6em";
      ToDoIcons.style.width = "5em";
      ToDoIcons.style.paddingRight = "0em";

      saveIconJS.style.width = "17px";
      saveIconJS.style.height = "17px";
      deleteNoteJS.style.width = "17px";
      deleteNoteJS.style.height = "17px";
      headingJS.style.width = "14em";

      minimizeJS.style.display = "none";
      maximizeJS.style.display = "flex";
      minimizeJS.classList.remove("flag");

      // To Scroll Horizontally NoteTabs---------->

      NotesJS.style.flexWrap = "nowrap";
      NotesJS.onwheel = (event) => {
        NotesJS.scrollLeft += event.deltaY * 1; // Adjust scroll speed
        event.preventDefault();
      };
      // console.log("clicking broo");
    }
  }
});

// -------------------------------------------------------------------------->

//adding New ToDO Tab-->
function addNewToDoTab() {
  let ToDObutton = document.querySelector(".checkButt");
  let ToDoContainerJS = document.querySelector(".ToDoContainer");

  ToDObutton.addEventListener("click", () => {
    let todoTabJS = document.createElement("div");
    todoTabJS.className = "todoTab";
    todoTabJS.style.order = "-1";
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
    ToDoSection.style.display = "grid";
    NotesSection.style.flexWrap = "nowrap";
    let flagJS = document.querySelector(".flag");
    if (flagJS) {
      flagJS.click();
    }
    // To scroll Horizontally within the NotePad
    NotesSection.onwheel = (event) => {
      NotesSection.scrollLeft += event.deltaY * 1; // Adjust scroll speed
      event.preventDefault();
    };
  });
  ToDoNavButt.addEventListener("click", () => {
    NotesSection.style.display = "none";
    LoginPage.style.display = "none";
    ToDoSection.style.display = "grid";
  });
  ListNavButt.addEventListener("click", (event) => {
    let flagJS = document.querySelector(".flag");
    if (flagJS) {
      flagJS.click();
    }

    ToDoSection.style.display = "none";
    LoginPage.style.display = "none";
    NotesSection.style.display = "grid";
    NotesSection.style.gridTemplateColumns = "400px 400px 400px";
    NotesSection.style.gap = "1em";

    // NotesSection.style.Wrap = "wrap";
    NotesSection.style.overflowY = "scroll";
    // To scroll vertically within the NotePad
    NotesSection.onwheel = (event) => {
      let NotePadJS = event.target.classList.contains("NotesPad");
      if (NotePadJS) {
        NotePadJS.scrollTop += event.deltaY * 1; // Adjust scroll speed
        event.preventDefault();
      }
    };
  });
}
SPAToggle();
