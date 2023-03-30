"usr strict";

const api_key = "920290d359c8ac3c609f399417b6bdd5"
const imageBaseUrl = "https://image.tmdb.org/t/p/"


/* 
* FETCH DATA FROM A SERVER USING THE 'URL' AND PASSES
* THE RESULT IN JSON DATA TO A 'CALLBACK' FUNCTION
* ALONG WITH AN OPTIONAL PARAMETER IF HAS 'OPTIONALPARAM'
*/

const fetchDataFromServer = function (url, callback, optionalParam){
    fetch(url)
    .then(Response => Response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseUrl, api_key, fetchDataFromServer };
