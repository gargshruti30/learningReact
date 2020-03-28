import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'; // the very reason we are not directly writing this in image source is that we want webpack to know that we have imported this image.
// what happens exactly is that when our application is shipped to development server webpack actually doesnt ship the actual src folder but a  optimized version of it which is very differenet from what
// we see here in development mode. so by importing this we are telling webpack that this image is also reqd in that optimized version

import classes from './Logo.css'

const logo = (props) => (
    <div  className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
)

export default logo; 