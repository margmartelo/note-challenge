'use strict'

  class NoteList{ 
   constructor() { 
     this.list = []; 
    } 

    addingNotes(note) {
      this.list.push(note)
    }

    seeingNotes() {
      return this.list[0].text;
    }

 };
