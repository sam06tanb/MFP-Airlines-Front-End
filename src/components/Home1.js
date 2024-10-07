import styles from "./Home1.module.css";
import hoteis from "./img/imgHome1/hoteis.png";
import passagensAereas from "./img/imgHome1/passagensAereas.png";
import programaFidelidade from "./img/imgHome1/programaFidelidade.png";
import viagemCompleta from "./img/imgHome1/viagemCompleta.png";


function Home1(){
    return (
        <>
            <section>
                <div className={styles.container}>
                    <section className={styles.airplane}>
                        <div className={styles.central}>
                            <ul>
                                <li> <img src={passagensAereas} alt="Passagens Aereas"></img><br/>Passagens <br/> Áereas</li>
                                <li> <img src={programaFidelidade} alt="Programa Fidelidade"></img><br/>Programa <br/> Fidelidade</li>
                                <li> <img src={hoteis} alt="Hoteis" width="100px" height="50px"></img><br/>Hóteis</li>
                                <li> <img src={viagemCompleta} alt="Viagem Completa"></img><br/>Viagem <br/> Completa</li>
                            </ul>
<<<<<<< Updated upstream
                            </div>
=======
                        </div>
>>>>>>> Stashed changes
                    </section>
                </div>
            </section>
        </>
    )
}

export default Home1;