import React from "react"
import ava_mini from '../../img/avatar_mini.jpg'

function Post(props) {
    return (
        <div className="post">
            <img src={ava_mini} alt="profile photo"/>
            <span>Ryan Reynolds</span>
            <p>{props.message}</p>
        </div>
    )
}
export default Post