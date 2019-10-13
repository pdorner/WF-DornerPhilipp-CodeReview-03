/*creat Header + navbar*/

function header() {
    var header = document.getElementById("header");
    header.className = "header";
    header.innerHTML = "<h1 id = 'title'>Movie Database</h1>";    
    

}
/*Main*/


function main(movie){
    var mov = document.createElement("h1");
    mov.innerText= "Movie";

     for (var i = 0; i < movie.length ; i++) {
            var obj = movie[i];
            var main = document.getElementsByTagName("content")[0];      
            var flexItem = document.createElement("div");
            flexItem.className = "flexitem";
            main.appendChild(flexItem);
            var imgDiv = document.createElement("div");
            imgDiv.className = "imgDiv"
            flexItem.appendChild(imgDiv);
            var movieImg = document.createElement("img");
            movieImg.src = obj.img; 
            imgDiv.appendChild(movieImg);
            var rightContent = document.createElement("div");
            rightContent.className = "rightContent";
            flexItem.appendChild(rightContent);
            var movieTitle = document.createElement("h3");
            movieTitle.innerText = obj.movieTitleName;
            movieTitle.className="title";
            var moviediscr = document.createElement("h4");
            moviediscr.innerText = obj.shortDiscription;
            var runtime = document.createElement("h4");
            runtime.innerText = obj.runtime;
            rightContent.appendChild(movieTitle);
            rightContent.appendChild(moviediscr);
            rightContent.appendChild(runtime)
            rightContent.innerHTML +=`<div class="likeDiv"><button class="ButtonLike" id="${i}">Like &#10026;</button><span class="like">${movie[i].like}</span></div>`;
            


        }

    generateEvents ();
details();
}


/*creat Footer*/
function footer() {
    var footer = document.getElementById("footer");
    footer.innerHTML = '<nav class="navbar1"><ul class="item1"><li class="item-list1"><a href="index.html " alt="main">Home</a></li></ul></nav>';
    footer.innerHTML += '<p id="myName">&copy; Dorner Philipp-CodeFactory 2018</p>';
   
}

//load everything in my HTML 
window.onload = function () {
    header();
    main(movie);
    footer();
    }

//counter Event for LikeButton gets id of json and calls likes
function generateEvents (){
    var button = document.getElementsByClassName("ButtonLike");

    for(var i = 0; i < movie.length; i++){
        button[i].addEventListener("click",function(){likes(this.getAttribute("id"))
        }, false);
    }
}
//counting + 1 to the likes and display it 
function likes(i) {
    var counter = document.getElementsByClassName("like");
    var like = movie[i].like;
    like ++;
    movie[i].like = like;
    counter[i].innerHTML = like;
   
};

//sort my list wiht likes
var box = document.getElementsByTagName("content")[0];
function sortingLikes(){
    var newMovies = movie.sort(function compareNumbers(a, b){
        var like1 = (a.like);
        var like2 = (b.like);
        return like2 - like1;
    });
    box.innerHTML = "";
    main(newMovies);
}
//sorting my liet by Title
function sortingTitle(){
    var newMovies = movie.sort(function(a,b){
        var title1 = a.movieTitleName.toLowerCase(); // ignore upper and lowercase
        var title2 = b.movieTitleName.toLowerCase();
        if (title1 < title2) {
            return -1;
        }
        if (title1 > title2) {
             return 1;
        }
        return 0; // names equal
    });
    box.innerHTML = "";
    main(newMovies);
}

//call the functions wicht my Droptown menue
var sortIt = document.getElementById("sort");
sortIt.addEventListener("click", sorting, false);
function sorting(){
    var sortIt = document.getElementById("sort").value;
    if (sortIt == "likes"){
        return sortingLikes();
    }
    else if (sortIt == "alphabet"){
        return sortingTitle();
    }
}

