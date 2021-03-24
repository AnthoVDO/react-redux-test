import axios from "axios";

export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/posts?_sort=id&_order=desc")//call the database supposed to be on the server. _sort is for sorting by id and _order is for sorting descending. Not mandatory but good to know.
        .then((res)=>{
            dispatch({type: GET_POSTS, payload: res.data})
        })
        .catch((err)=> console.log(err));
    }
}