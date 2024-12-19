import React from 'react'
import bodyStyles from './body.module.css'

const Body = () => {
    return (
        <>
            <img src="./src/assets/background-img.jpg" alt="Background Image" className={bodyStyles.cover} />
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Body
