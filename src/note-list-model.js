'use strict'

  class NoteListModel{ 
   constructor() { 
     this.list = []; 
    } 

    addingNotes(note) {
      this.list.push(note)
    }

    seeingNotes() {
      console.log(this.list);
    }

 };
