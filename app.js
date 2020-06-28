let library = [{
    title: "Harry Potter",
    author: "J.k. Rowling",
    pages: 265,
    read: true
},
{
    title: "The Expanse",
    author: "JA Covey",
    pages: 600,
    read: true
},
{
    title: "The Hunger Games",
    author: "Veronica Something",
    pages: 300,
    read: false
}];

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if(this.read == true){
            return `${this.title} by ${this.author}, ${this.pages} pages, have read.`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, have not read yet.`;
        }
    }
}

function render() {
    //loop through library array
    let cardDisplay = document.querySelector(".card")
    for(let i = 0; i < library.length; i++){
        let title;
            let author;
            let pages;
            let read;
            
        for(let prop in library[i]){
            
            if(prop === "title"){
                title = library[i][prop]
            } else if (prop === "author"){
                author = library[i][prop];
            } else if (prop === "pages"){
                pages = library[i][prop]
            } else if (prop === "read") {
                read = library[i][prop]
            }
        }
        titleHeader = document.createElement("h1");
        authorHeader = document.createElement("h2")
        authorText = document.createTextNode(author);
        titleText = document.createTextNode(title);
        titleHeader.appendChild(titleText);
        authorHeader.appendChild(authorText);
        cardDisplay.appendChild(titleHeader);
        cardDisplay.appendChild(authorHeader)
    }
    //each iteration take each key:value pair and display it on html with title as the header1 author as header 2 pages as header 3 and read as button which can be clicked read or not read

}

function addBooksToLibrary() {

}

render()