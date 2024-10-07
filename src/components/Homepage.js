import React, { useState } from "react";
import styles from "./Homepage.module.css";
<<<<<<< Updated upstream
import Navbar from "./Navbar";
import Home1 from "./Home1";
=======
import Navbar from "./Navbar.js";
import Home1 from "./Home1.js";
>>>>>>> Stashed changes

import bag from "./img/imgSection1/bag.png"
import paw from "./img/imgSection1/paw.png"
import check from "./img/imgSection1/check.png"
import papercheck from "./img/imgSection1/papercheck.png"
import passport from "./img/imgSection1/passport.png"

function Homepage() {
<<<<<<< Updated upstream
  return (
    <body>
      <Navbar />
      <Home1 />
      <section>
        <div className={styles.contentContainer}>
          <div className={styles.iconContainer}>

            <div className={styles.iconBox}>
              <img className={styles.iconsBox} src={check} alt="Check-in Icon"></img>
              <a href="/" className={styles.pboxes}>Check-in</a>
            </div>

            <div className={styles.iconBox}>
              <img className={styles.iconsBoxpassport} src={passport} alt="Passport Icon"></img>
              <a href="/" className={styles.pboxes}>Reservas</a>
            </div>

            <div className={styles.iconBox}>
              <img className={styles.iconsBox} src={paw} alt="Paw Icon"></img>
              <a href="/" className={styles.pboxes}>Viage com seu pet</a>
            </div>

            <div className={styles.iconBox}>
              <img className={styles.iconsBox} src={papercheck} alt="Papercheck Icon"></img>
              <a href="/" className={styles.pboxes}>Documentos para viajar</a>
            </div>

            <div className={styles.iconBox}>
              <img className={styles.iconsBox} src={bag} alt="Bag Icon"></img>
              <a href="/" className={styles.pboxes}>Bagagens</a>
            </div>
          </div>

          <hr className={styles.lineSection1}></hr>
          {/* TODO: This is spacing thing is temporary */}
          <div style={{ height: "100em" }}>

          </div>
        </div>
      </section>
      <section>
        <div className={styles.footerContainer}>
          {/* TODO: This is spacing thing is temporary */}
          <div style={{ height: "40em" }}></div>
        </div>
      </section>
    </body>
  );
=======
    return (
        <body>
        <Navbar />
        <Home1 />
        <section>
            <div className={styles.contentContainer}>
                <div className={styles.iconContainer}>

                    <div className={styles.iconBox}>
                        <img className={styles.iconsBox} src={check} alt="Check-in Icon"></img>
                        <a href="/" className={styles.pboxes}>Check-in</a>
                    </div>

                    <div className={styles.iconBox}>
                        <img className={styles.iconsBoxpassport} src={passport} alt="Passport Icon"></img>
                        <a href="/" className={styles.pboxes}>Reservas</a>
                    </div>

                    <div className={styles.iconBox}>
                        <img className={styles.iconsBox} src={paw} alt="Paw Icon"></img>
                        <a href="/" className={styles.pboxes}>Viaje com seu pet</a>
                    </div>

                    <div className={styles.iconBox}>
                        <img className={styles.iconsBox} src={papercheck} alt="Papercheck Icon"></img>
                        <a href="/" className={styles.pboxes}>Documentos para viajar</a>
                    </div>

                    <div className={styles.iconBox}>
                        <img className={styles.iconsBox} src={bag} alt="Bag Icon"></img>
                        <a href="/" className={styles.pboxes}>Bagagens</a>
                    </div>
                </div>

                <hr className={styles.lineSection1}></hr>
                {/* TODO: This is spacing thing is temporary */}
                <div style={{ height: "100em" }}>

                </div>
            </div>
        </section>
        <section>
            <div className={styles.footerContainer}>
                {/* TODO: This is spacing thing is temporary */}
                <div style={{ height: "40em" }}></div>
            </div>
        </section>
        </body>
    );
>>>>>>> Stashed changes
}

export default Homepage;
