import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to hire</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt='email Icon' />
                    <a href='mailto:myemail@email.com'>thisarakavishka0@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedin Icon' />
                    <a href='https://www.linkedin.com/in/thisara-kavishka/'>linkedin.com/in/thisara-kavishka</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt='github Icon' />
                    <a href='https://github.com/Thisarakavishka'>github.com/Thisarakavishka</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact