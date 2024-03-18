// show buttons
function showButtons() {
  let topBarButtJS = document.querySelector(".topBarButtons");
  let buttons = document.querySelector(".createButtons");

  topBarButtJS.addEventListener("click", () => {
    console.log("button clicked");

    if (buttons.style.display === "none") {
      buttons.style.display = "flex";
      topBarButtJS.innerText = "x";
    } else {
      buttons.style.display = "none";
      topBarButtJS.innerText = "+";
    }
  });

  // buttons.style.transition = "display 1s ease-in-out";
}
showButtons();

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
    saveData(); //--- to save data.
  });
}
addNewListTab(); // adding a new NotePad is Done.

let NotesJS = document.querySelector(".Notes");

NotesJS.addEventListener("click", function (event) {
  if (event.target.classList.contains("DeleteNote")) {
    let flagJS = document.querySelector(".flag");
    if (flagJS) {
      flagJS.click();
    }
    let NotesTab = event.target.closest(".NotesTab"); // Find the parent Tab item
    if (NotesTab) {
      NotesTab.remove(); // Remove the Tab if found
    }
    saveData(); //--- to save data.
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
  saveData(); //--- to save data.
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
      ToDoIcons.style.paddingRight = "1em";

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

      let flagNotesJS = document.querySelector(".flagNotes");
      if (flagNotesJS) {
        ToDoContainerJS.style.display = "none";
        NotesJS.style.display = "grid";
        NotesJS.style.gridTemplateColumns = "400px 400px 400px";
        NotesJS.style.gap = "1em";

        NotesJS.style.Wrap = "wrap";
        NotesJS.style.overflowY = "scroll";
        NotesJS.onwheel = (event) => {
          NotesJS.scrollTop += event.deltaY * 1; // Adjust scroll speed
          event.preventDefault();
        };
      }
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
    saveData(); //--- to save data.
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
      saveData(); //--- to save data.
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
      saveData(); //--- to save data.
    }
  });

  ToDoContainerJS.addEventListener("click", function (event) {
    if (event.target.classList.contains("DeleteButtIcon")) {
      let listItem = event.target.closest("li"); // Find the parent list item
      if (listItem) {
        listItem.remove(); // Remove the list item if found
      }
      saveData(); //--- to save data.
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
    saveData(); //--- to save data.
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
  let topBarButtJS = document.querySelector(".topBarButtons");
  let profileJS = document.querySelector("#profile");

  // console.log(ProfileIcon)

  ProfileNavButt.addEventListener("click", () => {
    NotesSection.style.display = "none";
    ToDoSection.style.display = "none";
    LoginPage.style.display = "flex";
    NotesSection.classList.remove("flagNotes");
    topBarButtJS.style.display = "none";

    HomeNavButt.style.background = " transparent";
    ToDoNavButt.style.background = "transparent";
    ListNavButt.style.background = " transparent";
    profileJS.style.background = "rgb(5, 37, 58)";
  });
  HomeNavButt.addEventListener("click", () => {
    //  console.log("hehehe")

    topBarButtJS.style.display = "flex";
    LoginPage.style.display = "none";
    NotesSection.style.display = "flex";
    ToDoSection.style.display = "grid";
    NotesSection.style.flexWrap = "nowrap";
    NotesSection.classList.remove("flagNotes");
    let flagJS = document.querySelector(".flag");
    if (flagJS) {
      flagJS.click();
    }
    profileJS.style.background = "transparent";
    ToDoNavButt.style.background = "transparent";
    ListNavButt.style.background = " transparent";
    HomeNavButt.style.background = " rgb(17,22,41)";

    // To scroll Horizontally within the NotePad
    NotesSection.onwheel = (event) => {
      NotesSection.scrollLeft += event.deltaY * 1; // Adjust scroll speed
      event.preventDefault();
    };
  });
  ToDoNavButt.addEventListener("click", () => {
    topBarButtJS.style.display = "flex";
    NotesSection.style.display = "none";
    LoginPage.style.display = "none";
    ToDoSection.style.display = "grid";
    NotesSection.classList.remove("flagNotes");
    profileJS.style.background = "transparent";
    HomeNavButt.style.background = " transparent";
    ListNavButt.style.background = " transparent";
    ToDoNavButt.style.background = " rgb(17,22,41)";
  });
  ListNavButt.addEventListener("click", (event) => {
    let flagJS = document.querySelector(".flag");
    if (flagJS) {
      flagJS.click();
    }
    topBarButtJS.style.display = "flex";
    NotesSection.classList.add("flagNotes");

    ToDoSection.style.display = "none";
    LoginPage.style.display = "none";
    NotesSection.style.display = "grid";
    NotesSection.style.gridTemplateColumns = "400px 400px 400px";
    NotesSection.style.gap = "1em";

    profileJS.style.background = "transparent";
    HomeNavButt.style.background = " transparent";
    ToDoNavButt.style.background = "transparent";
    ListNavButt.style.background = " rgb(17,22,41)";

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

function loginPageEvents() {
  let LoginDiv = document.querySelector(".submitdiv");
  let signUpButt = document.querySelector(".signUp");
  let usernametab = document.querySelector(".username");

  let passwordJS = document.querySelector(".passwordDiv input ").value;
  let emailJS = document.querySelector(".emailID input").value;
  let usernameJS = document.querySelector(".username input").value;

  LoginDiv.addEventListener("click", () => {
    if (!passwordJS === "" && !emailJS === "") {
      console.log("inside logindiv event");

      let loginCard = document.querySelector(".loginCard");
      let userCard = document.querySelector(".userCard");
      userCard.style.display = "flex";
      loginCard.style.display = "none";
      saveData();
    } else {
      console.log("fileds are empty");
    }
  });

  let logoutButt = document.querySelector(".logouutButt");
  let loginCard = document.querySelector(".loginCard");
  let userCard = document.querySelector(".userCard");
  if (logoutButt) {
    logoutButt.addEventListener("click", () => {
      userCard.style.display = "none";
      loginCard.style.display = "flex";
      saveData();
    });
  }

  let loginButt = document.querySelector(".submitdiv button");
  let MovingBallJS = document.querySelector(".movingball");
  loginButt.addEventListener("mousemove", (e) => {
    MovingBallJS.style.display = "flex";
    const buttonRect = loginButt.getBoundingClientRect();
    const mouseX = Math.min(
      Math.max(e.clientX - buttonRect.left, 0),
      buttonRect.width
    );
    const mouseY = Math.min(
      Math.max(e.clientY - buttonRect.top, 0),
      buttonRect.height
    );
    MovingBallJS.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
}
loginPageEvents();

// -----------------To save Data in localStorage----

let loginTabJs = document.querySelector(".loginTab");

function saveData() {
  localStorage.setItem("Notes", NotesJS.innerHTML);
  localStorage.setItem("ToDos", ToDoContainerJS.innerHTML);
  localStorage.setItem("loginTab", loginTabJs.innerHTML);
}
function retriveData() {
  NotesJS.innerHTML = localStorage.getItem("Notes");
  ToDoContainerJS.innerHTML = localStorage.getItem("ToDos");
  loginTabJs.innerHTML = localStorage.getItem("loginTab");
}
retriveData();
