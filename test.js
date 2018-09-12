

$(function () {
    fetch("https://api.myjson.com/bins/8zpvs")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var allBooks = data.books;
            getBooks(allBooks);
            console.log(allBooks);
        });
});

function getBooks(allBooks) {
    var template = "";
    allBooks.forEach(book => {

        template += `
        
        <div class="col-sm-6 col-md-6 col-lg-4"><div class="d-flex justify-content-center">
         <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
               <div class="front">
           
               
               <img class= "image"  src="${book.cover}">
            
              </div>
            
            <div class="back">
            
            <div class="d-flex justify-content-center"><h3>${book.title}</h3></div>
            <div class="d-flex align-items-stretch">${book.description}</div>
            <div><button type="button" onclick= "window.open("${book.detail}")">details</button></div>
            </div>
        

         </div>
        </div>
        </div></div>
        
        
    
        `

    });
    document.getElementById("bookstore").innerHTML = template;
}


