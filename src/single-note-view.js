'use strict'

  class SingleNoteView{ 
   constructor(note){ 
     this.note = note; 
    } 

    gettingNotes() {
      return "<div>" + this.note.print() + "</div>";
    }
  }
