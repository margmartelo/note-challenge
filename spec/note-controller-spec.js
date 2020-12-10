'use strict';

function testNoteControllerFunctionality() {
  let fakeNoteListView = { 
    viewList: function() { 
      return "<ul><li><div>Note1</div></li><li><div>Note2</div></li></ul>" 
    } 
  }

  let fakeElement = {
    innerHTML: ""
  }
  myNoteController = new NoteController(fakeNoteListView, fakeElement);
  myNoteController.updateElement();
  assert.isTrue(fakeElement.innerHTML === "<ul><li><div>Note1</div></li><li><div>Note2</div></li></ul>");
};

testNoteControllerFunctionality();
console.log("Tests Note Controller's Functionality.")
