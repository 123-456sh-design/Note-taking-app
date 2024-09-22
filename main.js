let notesContainer = document.querySelector(".notes-container");
let createNote = document.querySelector(".create-note");
let notes = document.querySelectorAll(".note");

createNote.addEventListener("click", function () {
    let note = document.createElement("div");
    let noteCategory = document.createElement("input");
    let inputNote = document.createElement("textarea");
    let deleteImg = document.createElement("img");
    let editImg = document.createElement("img");
    let saveImg = document.createElement("img");

    note.className = "note";
    noteCategory.className = "note-category";
    noteCategory.placeholder = "note category";
    inputNote.className = "input-notes";
    inputNote.placeholder = "write your note here...";
    deleteImg.className = "delete-icon";
    editImg.className = "edit-icon";
    saveImg.className = "save-icon";
    deleteImg.src = "images/delete.png";
    editImg.src = "images/edit.png";
    saveImg.src = "images/save.png";

    note.appendChild(noteCategory);
    note.appendChild(inputNote);
    note.appendChild(deleteImg);
    note.appendChild(editImg);
    note.appendChild(saveImg);
    notesContainer.appendChild(note);
});

function updateStorage() {
  // logging the notes container
    console.log("notes container ", notesContainer.innerHTML);

    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

notesContainer.addEventListener("click", function (e) {
    
    let categoryInput = document.querySelector(".note-category");
    let noteInput = document.querySelector(".input-notes");

    if (e.target.className === "save-icon") {
        // Get the current input
        let textAreaElement =
        e.target.previousSibling.previousSibling.previousSibling;
        // Get the current text area
        let inputElement =
        e.target.previousSibling.previousSibling.previousSibling.previousSibling;

        if (categoryInput.value !== "" || noteInput.value !== "") {
        // Set the current input value in its input value
        inputElement.setAttribute("value", inputElement.value);

        // Set the current text area value in its innerText
        textAreaElement.innerText = textAreaElement.value;

        categoryInput.setAttribute("readonly",true)
        noteInput.setAttribute("readonly",true)

        updateStorage();
        }
    } 

    else if (e.target.className === "delete-icon") {
        e.target.parentElement.remove();
        updateStorage();
    }

    else if (e.target.className === "edit-icon") {
        categoryInput.removeAttribute("readonly")
        noteInput.removeAttribute("readonly")
        updateStorage();
    }
});

let darkModeButton = document.querySelector(".dark-mode-btn");

darkModeButton.onclick = function(){
    document.body.classList.toggle("dark-mode")
}

