// Save a note
let note = [];
function saveNote(content, id) {
  const addNote = { content: content, id: id };
  return note.push(addNote);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(note);

// get note
function getNote(id) {
  for (let i = 0; i < note.length; i++) {
    if (note[i].id === id) {
      return note[i];
    } else if (typeof note[i].id !== Number) {
      return `Error!! This is not a valid id`;
    } else {
      return `Error!! This is not a valid id`;
    }
  }
}
console.log(getNote(2));

//Log Out Notes
function logOutNotesFormatted() {
  for (let i = 0; i < note.length; i++) {
    const newNote = note[i];
    console.log(
      `The note with id: ${newNote.id}, has the following note text: ${newNote.content}`
    );
  }
}
logOutNotesFormatted();

// Edit note

function editNote(id) {
  let noteFound = false;
  for (let i = 0; i < note.length; i++) {
    if (note[i].id === id) {
      note[i].content = prompt("Edit your note");
      console.log(note);
      noteFound = true;
      break;
    }
  }
  if (!noteFound) {
    console.log(`Please enter a valid id`);
  }
}
editNote(1);
