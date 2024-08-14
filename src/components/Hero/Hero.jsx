import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, i'm thisara</h1>
                <p className={styles.description}>I'm a software engineering student specializing in backend development with a solid understanding of frontend technologies. I enjoy solving complex problems and building efficient, scalable systems. I'm eager to apply my skills in real-world projects and continue growing as a developer.</p>
                <a className={styles.contactBtn} href='mailto:myemail@email.com'>Contact me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' />
            <div className={StyleSheet.topBlur}></div>
            <div className={StyleSheet.bottomBlur}></div>
        </section>
    );
}

export default Hero