import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Thisara Kavishka</h1>
                <p className={styles.description}>FullStack Developer | Student</p>
                <p className={styles.heroDescription}>I'm a passionate student of software engineering having a focus on Java who is always looking for new possibilities to learn and grow.</p>
                <a className={styles.contactBtn} href='mailto:myemail@email.com'>Contact me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt='Hero image of me' />
            <div className={StyleSheet.topBlur}></div>
            <div className={StyleSheet.bottomBlur}></div>
        </section>
    );
}

export default Hero