import React from "react"

import './profile.css'

import ava from './/img/avatar.jpg'
import Posts from './posts/Posts'


function Profile(props) {
    return (
        <div className='profile'>
            <div className="me"> 
                <img src={ava} alt='profile mini photo'/>
                <p>
                    {props.name}
                </p>
            </div>
            <Posts message={props.message}/>
        </div>
    )
}
export default Profile