'use strict';

function testNoteStoresText(text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
  console.log(note.text);
};

testNoteStoresText("This proofs text it being stored");


function testNotePrintsText(text) {
  var note = new Note(text);
  assert.isTrue(note.print() === text);
};

testNotePrintsText("This is the proof that it's printing");
