import React, { useState } from "react";
import styles from "./Homepage.module.css";
import Navbar from "./Navbar"
import Home1 from "./Home1"

function Homepage() {
    return ( 
        <body>
            <Navbar />
            <Home1 />
            <section>
                <div className={styles.contentContainer}>
                    {/* TODO: This is spacing thing is temporary */}
                    <div style={{height: "100em"}}></div> 
                </div>
            </section>
            <section>
                <div className={styles.footerContainer}>
                    {/* TODO: This is spacing thing is temporary */}
                    <div style={{height: "40em"}}></div> 
                </div>
            </section>
        </body>
    )
}

export default Homepage;
