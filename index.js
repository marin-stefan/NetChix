const content = document.querySelector('.content');
let viewselector = "grid" ;
function selectView(){
    if (viewselector === "table") {
        showTable()
    }if (viewselector === "grid") {
        showMovies()
    } if(viewselector === "list") {
     showList()
    }
};

const movies = [
    {
        name : "American Pie",
        year : 1999,
        rating : "7.0",
        description : "Four teenage boys enter a pact to lose their virginity by prom night.",
        addTime : new Date()
    },
    {
        name : "Die Hard",
        year : 1988,
        rating : "8.2",
        description : "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles. ",
        addTime : new Date()
    }, 
    {
        name : "The Butterfly Effect",
        year : 2004,
        rating : "7.6",
        description : "Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.",
        addTime : new Date()
    },
    {
        name : "Independence Day",
        year : 1996,
        rating : "7.0",
        description : "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
        addTime : new Date()
    },
    {
        name : "Forrest Gump",
        year : 1994,
        rating : "8.8",
        description : "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        addTime : new Date() 
    }
];

function sortByYear(){  
    movies.sort((a, b) => {
        return a.year - b.year;
    });
};

function sortByName(){
    movies.sort((a, b) => {
        let elema = a.name.toLowerCase(),
            elemb = b.name.toLowerCase();

        if (elema < elemb) {
            return -1;
        }
        if (elema > elemb) {
            return 1;
        }
        return 0;
    });
};

function sortByRating(){
    movies.sort((a, b) => {
        let elema = a.rating.toLowerCase(),
            elemb = b.rating.toLowerCase();

        if (elema < elemb) {
            return -1;
        }
        if (elema > elemb) {
            return 1;
        }
        return 0;
    });
};

function showMovies(){
    content.innerHTML="";
    movieBox = document.createElement('div');
    movieBox.classList = "content-box";
    content.appendChild(movieBox);
    movies.forEach(element => {
        movieBox.innerHTML += `
            <div class="movie-item">
                <img src="images/movie.jpg" style="height:200px;">
                <h2>${element.name}</h2>
                <h3>${element.year}</h3>
                <h3>${element.rating}</h3>
                <h4>${element.description}</h4>
                <h4>Added :  ${element.addTime.getFullYear()}-${element.addTime.getMonth()+1}-${element.addTime.getDate()}</h4>
            </div>
            `
    });
    viewselector = "grid";
    event.preventDefault();   
};


function showList(){
    content.innerHTML="";
    movieList = document.createElement("ul");
    content.appendChild(movieList);
    movies.forEach(element => {
        movieList.innerHTML += `
            <li>
                <div class="movie-item-list">
                    <div>
                        <h2>${element.name}</h2>
                        <h3>${element.year}</h3>
                        <h3>${element.rating}</h3>
                        <h4>${element.description}</h4>
                        <h4>Added: ${element.addTime.getFullYear()}-${element.addTime.getMonth()+1}-${element.addTime.getDate()}</h4>
                    </div>
                    <div>
                        <img src="images/movie.jpg" style="height:200px;">
                    </div>
                </div>
            </li>
        `
    });
    viewselector = "list";
    event.preventDefault();
};



function showTable () {
    content.innerHTML="";
    movieTable = document.createElement("table");
    movieTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Image</th>
            <th>Added</th>
        </tr>
        `
    content.appendChild(movieTable);
    movies.forEach(element => {
        movieTable.innerHTML += `
            <tr>
                <td class="col20">${element.name}</td>
                <td class="col10">${element.year}</td>
                <td class="col10">${element.rating}</td>
                <td class="col30">${element.description}</td>
                <td class="col20"><img src="images/movie.jpg" style="height:200px;"></td>
                <td class="col10">${element.addTime.getFullYear()}-${element.addTime.getMonth()+1}-${element.addTime.getDate()}</td>
            </tr>
            `
    });
    viewselector = "table";
    event.preventDefault();
};


const form = document.querySelector('#add-form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const name = event.target.name.value;
    const year = event.target.year.value;
    const rating = event.target.rating.value;
    const description = event.target.description.value;
    const newMovie = {
        name : name,
        year : year,
        rating : rating,
        description : description,
        addTime : new Date()
    };
    document.querySelector("#add-form").reset();
    movies.push(newMovie)
    console.log("aa")
    selectView();
});


const sortForm = document.querySelector("#sort-form");
sortForm.addEventListener('submit', function(event){
    event.preventDefault();
    const action = event.target.sort.value;
    moviescopy = Object.assign(movies)
    if (action === "year") {
        sortByYear();
        selectView();
    }if (action === "name") {
        sortByName();
        selectView();
    } if (action === "rating") {
        sortByRating();
        selectView();
    }
});

window.onload =function() {
    showMovies(); 
};









