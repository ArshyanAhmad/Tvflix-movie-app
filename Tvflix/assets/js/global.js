'use strict';

// Add event on multiple elements

const addEventOnElements = function (elements, eventType, callback){
    for(const elem of elements) elem.addEventListener(eventType, callback);
}

// Toggle search box in mobile device || small screen

const searchBox = document.querySelector("[search-box]")
const searchTogglers = document.querySelectorAll("[search-toggler]")

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active")
})




// STORE MOVIEIS IN 'LOCAL STORAGE' WHEN YOU CLICK ANY MOVIE CARD 

const getMovieDetail = function(movieId){
    window.localStorage.setItem("movieId", String(movieId))
}


const getMovieList = function(urlParam, genereName){
    window.localStorage.setItem("urlParam", urlParam)
    window.localStorage.setItem("genreName", genereName)
}