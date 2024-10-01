import React, { useState } from "react";
import styles from "./Homepage.module.css";
import Navbar from "./Navbar"
import Home1 from "./Home1"

function Homepage() {
    return ( 
        <body>
            <section>
                <Navbar />
                <Home1 />
            </section>
        </body>
    )
}

export default Homepage;