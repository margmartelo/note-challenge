'use strict';

class NoteListView{
  constructor(listView = new NoteList) {
    this.listView = listView
    this.array = []

  }

  viewList() {
    for (var i = 0; i < this.listView.list.length; i++) {
        this.array.push("<li><div>" + this.listView.list[i].text.substring(0, 20) + "</div></li>")
    }

    return "<ul>" + this.array.join("") + "</ul>"
  }
};
