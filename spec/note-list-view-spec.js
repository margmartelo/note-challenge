'use strict';

function testInstantiationwithNoteListModel() {
  var noteList = new NoteList;
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listView instanceof NoteList);
};

testInstantiationwithNoteListModel();
console.log("Takes a note list model upon instantiation.")

function returnsHTMLOfNoteListModel() {
  var noteListView = new NoteListView();
  noteListView.listView.addingNotes("1234567891234567891234")
  noteListView.listView.addingNotes("1234567891234567891267")
  assert.isTrue(noteListView.viewList() === "<ul><li><div>12345678912345678912</div></li><li><div>12345678912345678912</div></li></ul>")
};
returnsHTMLOfNoteListModel();
console.log("It returns HTML of Note List Model with the 20 first characters of each note")






// Has a method that, when called, returns a string of HTML that represents the note list model.
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink:
// seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.
// NB: This challenge doesn't require you to display the HTML in a browser, or put the HTML
// into an HTML file. If your code returns the right string of HTML to your tests, the challenge
//  is complete!
