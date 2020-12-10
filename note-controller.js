const app = document.getElementById('app');
// console.log(app);
//
// app.innerHTML = 'howdy';

class NoteController {
  constructor(listView, element) {
    this.listView = listView
    this.element = element
  }

  updateElement() {
    this.element.innerHTML = this.listView.viewList();
  }
}
