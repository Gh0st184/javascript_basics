// 1.2(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6(по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.
// Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
// Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
// который будет назначать свойству highlighted значение true.

"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let postObjOld = new Post("Борис", "Hello world", "12.10.2021");
postObjOld.edit("Привет мир");

let attachedPostObjOld = new AttachedPost("Иван", "Привет мир", "12.10.2021");
attachedPostObjOld.edit("Hello world");
attachedPostObjOld.makeTextHighlighted();

// --------------------------------------------------------------------------------------

class PostNew {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPostNew extends PostNew {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }

}

let postNew2 = new PostNew("Наталья", "Письмо", "12.10.2021")
postNew2.edit("Всем привет");

let attachedPostNew2 = new AttachedPostNew("Ольга", "Открытка", "12.10.2021")
attachedPostNew2.edit("Посылка");
attachedPostNew2.makeTextHighlighted();
