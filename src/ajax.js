// this file isnt used in nrmal development at all it was just for the challenges

import axios from "./axios"; //axios with configuration


/*
    axios.<Http coresponding js method>( URL path after baseURL*in axios.js,{ sent data} ).then(
        ( destructurng promise obj { data }) => { 
            code that can use the returned data with data.data where: 1std =axios 2nd d =laravel api
        });
*/

// 1.Use console.log() to output an array with all of your article data from the API:

/*
axios.get("/articles").then(({data}) => { //destructuring the response object = response.data
    console.log( data.data ); //data data is used as the axios response object holds the ??data object in a laravel data object
});
*/

//2. Create a new article using axios and then console.log() its ID 

/*
axios.post("/articles", {
    title : "Elephant",
    content : "Oh are they not  the best, so big and grey.",
    tags : ["big", "Elephant", "Mammal"],
}).then(({data}) => {
    console.log( data.data.id ); // id is a property of the data object
});
*/


//3.Fetch one of your articles from the API and console.log() it:

/*
axios.get("/articles/86").then(({ data })=> {  //"/articles/<id>" is specified by the api documentation
    console.log(data.data)
});
*/

//4. Add a new tag to one of your articles and console.log() the tags array from the response:


/*
axios.patch("/articles/86",{
    tags : ["Africa", "big", "Elephant", "Mammal"], //more logic is needed to just push a single tag into the array 
}).then(({ data }) => {
    console.log( data.data.tags ); 
});
*/


//5. Delete an article and console.log() "Deleted" once you get back a response


/*
axios.delete("/articles/86").then(
    console.log("DELETED")
)
*/


// 6.Add a comment to an article using axios and console.log() its ID

/*
axios.post("/articles/86/comments",{
    email: "otto@gmail.com",
    comment: "well i disagree Elephants suck!"
}).then(({ data }) => {
    console.log(data.data.id) //here i get back the comments id as the api sends the comment back after a post request  to ./coments , not the article
});
*/

// 7. Use console.log() to list all of the comments for one of your articles

/*
axios.get("articles/86/comments").then(({data})=>{
    console.log(data.data)
});
*/

// 8. Use console.log() to output a list of all the tags

/*
axios.get("/tags").then(({ data })=> {
    console.log(data.data)
});
*/
