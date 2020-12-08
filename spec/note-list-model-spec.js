'use strict';

function testListStoresNotes(text) {
  var notelist = new NoteList;
  var note = new Note(text);
  notelist.addingNotes(note);
  assert.isTrue(notelist.list.length === 1);
};

testListStoresNotes("A new note");


function testSeeingListOfNotes() {
  var notelist = new NoteList;
  var note = new Note("Hello!");
  notelist.addingNotes(note);
  assert.isTrue(notelist.seeingNotes() === "Hello!");
};

testSeeingListOfNotes();
