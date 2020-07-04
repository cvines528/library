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
}

// Get Modal element

let modal = document.getElementById('addBookModal');
// Get open modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementById('closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outsideclick
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
 modal.style.display = 'block';
}
// Function to close modal
function closeModal(){
 modal.style.display = 'none';
}

// Function to close modal window click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
   }

   let newBookForm = document.getElementById("addBookForm");
   newBookForm.addEventListener("submit", addBooksToLibrary);
// Add books to library
function addBooksToLibrary(e) {
    e.preventDefault();
    let newTitle = document.getElementById("book-title").value;
    let newAuthor = document.getElementById("author").value;
    let newPages = document.getElementById("pages").value;
    let newRead = document.getElementById("read").value;
    let newBook = new Books(newTitle, newAuthor, newPages,newRead);
    library.push(newBook);
    console.log('form has been submitted');
    console.log(library)
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
                if(read !== true){
                    readText = document.createTextNode("Not Read");
                } else {
                    readText = document.createTextNode("Read");
                }
            }
        }
        titleHeader = document.createElement("h1");
        authorHeader = document.createElement("h2");
        pagesHeader = document.createElement("p");
        readHeader = document.createElement("button");
        authorText = document.createTextNode(author);
        titleText = document.createTextNode(title);
        pagesText = document.createTextNode(pages);
        titleHeader.appendChild(titleText);
        authorHeader.appendChild(authorText);
        pagesHeader.appendChild(pagesText);
        readHeader.appendChild(readText);
        cardDisplay.appendChild(titleHeader);
        cardDisplay.appendChild(authorHeader);
        cardDisplay.appendChild(pagesHeader);
        cardDisplay.appendChild(readHeader);
    }
    //each iteration take each key:value pair and display it on html with title as the header1 author as header 2 pages as header 3 and read as button which can be clicked read or not read

}




render()