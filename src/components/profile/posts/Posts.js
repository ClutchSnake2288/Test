import React from "react"
import ava_mini from '../img/avatar_mini.jpg'

function Posts() {
    return (
        <div className="posts">
            <h2>My posts</h2>
            <input placeholder='enter the post'/>
            <button>Add post</button>
            <div className="post">
                <img src={ava_mini} alt="profile photo"/>
                <span>Ryan Reynolds</span>
                <p>Some text</p>
            </div>
        </div>
    )
}
export default Posts