
$(function () {
    fetch("https://api.myjson.com/bins/8zpvs")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var allBooks = data.books;
            getBooks(allBooks);
            // console.log(allBooks);
            activateEL(allBooks);

        });
});

function getBooks(allBooks) {
    var template = "";
    allBooks.forEach(book => {

        template += `
        
        <div class="book col-sm-12 col-md-6 col-lg-6 col-xl-4"><div class="d-flex justify-content-center">
         <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
               <div class="front">
           
               <img class= "image"  src="${book.cover}">
            
              </div>
            
            <div class="back">
            
            <div class="d-flex justify-content-center"><h3><strong>${book.title}</strong></h3></div>
            <div class="d-flex align-items-stretch"><em>"${book.description}"</em></div>
            <div><p><strong>Language: "${book.language}"</strong></p></div>
            <div><a href="${book.detail}" target="_blank" ><button type="button">More Details</button></a></div>
            </div>
        

         </div>
        </div>
        </div></div>
        `

    });
    document.getElementById("bookstore").innerHTML = template;
}

function activateEL(listBooks){
    var input = document.querySelector("#myInput");
    input.addEventListener("keyup", search);
    
    // function search(e) {
    //     // console.log(e.target.value);
    //     var filtredBooks = [];
    
    //     listBooks.forEach(function (item) {
    //         var searchValue = e.target.value.toLowerCase();
    //         var title = item.title.toLowerCase();
    //         var description = item.description.toLowerCase();
    
    //         if (title.includes(searchValue) || description.includes(searchValue)) {
    //             filtredBooks.push(item);
    //         }
    //     })
    //     getBooks(filtredBooks);
    // }
}

function search(e) {

    var myBookDivs = Array.from(document.querySelectorAll('.book'));
    
    var searchValue = e.target.value.toLowerCase();
    myBookDivs.forEach(oneDiv => {
        var textToSearchIn = oneDiv.firstChild.firstElementChild.firstElementChild.innerText.toLowerCase();
        
        if(!textToSearchIn.includes(searchValue)){
            oneDiv.style.display = 'none';
        } else if (textToSearchIn.includes(searchValue)){
            oneDiv.style.display = 'block';
        }
    })
}

