import styles from "./Navbar.module.css"
import logo from "./img/imgNavbar/logo.png"
import lupa from "./img/imgNavbar/lupa.png"
import iconUser from "./img/imgNavbar/iconUser.png"
function Navbar(){
    return(
        <>
<<<<<<< Updated upstream
        <header>
            <section>
                <div className={styles.navbar}>
                    <div className={styles.elementos}>
                        <div className={styles.logo}>
                            <a href="/"> <img src={logo} alt="Logo" /> </a>
                        </div>
                        <ul>
                            <li className={styles.itensLista}>
                                <a href="/">Ofertas</a>
                            </li>
                            <li className={styles.itensLista}>
                                <a href="/">Reservas</a>
                            </li>
                            <li className={styles.itensLista}>
                                <a href="/">Checkin</a>
                            </li>
                            <li className={styles.itensLista}>
                                <a href="/">Comprar</a>
                            </li>
                            <li className={styles.itensLista}>
                                <a href="/">Ajuda</a>
                            </li>
                        </ul>
                        <div className={styles.busca}>
                            <input type="text" id="busca" placeholder="Buscar" required />
                            <img src={lupa}></img>
                        </div>
                        <div className={styles.userDiv}>
                            <img src={iconUser}></img>
                        </div>
                    </div>       
                </div>
            </section>
        </header>
=======
            <header>
                <section>
                    <div className={styles.navbar}>
                        <div className={styles.elementos}>
                            <div className={styles.logo}>
                                <a href="/"> <img src={logo} alt="Logo" /> </a>
                            </div>
                            <ul>
                                <li className={styles.itensLista}>
                                    <a href="/">Ofertas</a>
                                </li>
                                <li className={styles.itensLista}>
                                    <a href="/">Reservas</a>
                                </li>
                                <li className={styles.itensLista}>
                                    <a href="/">Checkin</a>
                                </li>
                                <li className={styles.itensLista}>
                                    <a href="/">Comprar</a>
                                </li>
                                <li className={styles.itensLista}>
                                    <a href="/">Ajuda</a>
                                </li>
                            </ul>
                            <div className={styles.busca}>
                                <input type="text" id="busca" placeholder="Buscar" required />
                                <img src={lupa}></img>
                            </div>
                            <div className={styles.userDiv}>
                                <img src={iconUser}></img>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
>>>>>>> Stashed changes
        </>
    )
}

export default Navbar;