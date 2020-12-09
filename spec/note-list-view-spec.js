// 'use strict';
//
// function testNoteListView(notelist) {
//   var notelist = new NoteList;
//   var note = new Note(text);
//   notelist.addingNotes(note);
//   assert.isTrue(notelist.list.length === 1);
// };
//
// testListStoresNotes("A new note");
//
//
//



// Code in a file called note-list-view.js.
// Tests are wrapped in the module pattern.
// Uses a Javascript class to define a note list view object that can be instantiated.
// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model.
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink:
// seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.
// NB: This challenge doesn't require you to display the HTML in a browser, or put the HTML
// into an HTML file. If your code returns the right string of HTML to your tests, the challenge
//  is complete!
