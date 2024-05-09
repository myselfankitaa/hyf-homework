// Save a note
const notes = [];
function saveNote(content, id) {
  const addNote = { content: content, id: id };
  return notes.push(addNote);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// get note
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
      // } else if (typeof note[i].id !== Number) {
      //   return `Error!! This is not a valid id`;
    } else {
      return `Error!! This is not a valid id`;
    }
  }
}
console.log(getNote(6));

//Log Out Notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const newNote = notes[i];
    console.log(
      `The note with id: ${newNote.id}, has the following note text: ${newNote.content}`
    );
  }
}
logOutNotesFormatted();

// Edit note

function editNote(id) {
  let noteFound = false;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = prompt("Edit your note");
      console.log(notes);
      noteFound = true;
      return;
    }
  }
  if (!noteFound) {
    console.log(`Please enter a valid id`);
  }
}
editNote(1);
