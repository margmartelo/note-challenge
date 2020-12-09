'use strict'

  class NoteList{ 
   constructor() { 
     this.list = []; 
     this.array = [];
    } 

    addingNotes(text) {
      this.list.push(new Note(text));
    }

    seeingNotes() {
      for (var i = 0; i < this.list.length; i++) { 
        this.array.push(this.list[i].text)         } 
        return this.array.join()
    }
 };
