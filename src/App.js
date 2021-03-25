import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector} from "react-redux";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils"; //used to check if the posts isn't empty so loaded before making a map


const App = () => {

  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
        {!isEmpty(posts) && posts.map((post, index)=>{
          return (<Post post={post} key={index}/>)
        })}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
