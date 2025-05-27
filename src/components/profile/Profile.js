import React from "react"

import './profile.css'

import ava from './/img/avatar.jpg'
import Posts from './posts/Posts'


function Profile() {
    return (
        <div className='profile'>
            <div className="me"> 
                <img src={ava} alt='profile mini photo'/>
                <p>
                    Ryan Reynolds
                </p>
            </div>
            <Posts/>
        </div>
    )
}
export default Profile