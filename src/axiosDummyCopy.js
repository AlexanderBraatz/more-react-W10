//this coppy was made for refrence only
import axios from "axios"; //the library version of axios


export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        Accept:"application/json", // sets return data to be sent in Json
        Authorization:"Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" //my key is here in the untracked axios.js file, untract so my token doesnt show oin repo, 
    },
});