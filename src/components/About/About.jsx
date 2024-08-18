import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt='my photo describe it' />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt='cursor image' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>Specializing in backend development to ensure your applications are secure, and reliable server-side solutions that keep your apps running smoothly.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='cursor image' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developer</h3>
                            <p>Creating responsive and visually appealing interfaces that enhance user experience and bringing designs to life with clean, efficient, and interactive frontend code. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt='cursor image' />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Designing intuitive and user-friendly interfaces that make navigating your app a breeze. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About