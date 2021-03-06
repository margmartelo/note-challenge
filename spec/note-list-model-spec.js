'use strict';

function testListStoresNotes() {
  var notelist = new NoteList;
  var note = new Note("A new note");
  notelist.addingNotes(note);
  assert.isTrue(notelist.list.length === 1);
};

testListStoresNotes();
console.log("It is storing the notes.")


function testSeeingListOfNotes() {
  var notelist = new NoteList;
  notelist.addingNotes("Hello!");
  assert.isTrue(notelist.seeingNotes() === "Hello!");
};

testSeeingListOfNotes();
console.log("It allows us to see the notes stored.")
