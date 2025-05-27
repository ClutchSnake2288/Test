import React from "react"
import ava_mini from '../img/avatar_mini.jpg'
import Post from "./post/Post"
function Posts() {
    return (
        <div className="posts">
            <h2>My posts</h2>
            <input placeholder='enter the post'/>
            <button>Add post</button>
            <Post message="hello world"/>
            <Post message="райан рейнольдс"/>
            <Post message="hhfhsdjhsgfgsf"/>
            <Post message="gfhsdagfsdagfhgasjgfhjggsgh"/>
        </div>
    )
}
export default Posts