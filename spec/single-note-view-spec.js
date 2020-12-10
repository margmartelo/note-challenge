'use strict';

function testSingleNoteView() {
  var singleNote = new SingleNoteView(new Note('This is a note'))
  assert.isTrue(singleNote.gettingNotes() === "<div>This is a note</div>");
};

testSingleNoteView();
console.log("SingleNoteView is working.")


 
