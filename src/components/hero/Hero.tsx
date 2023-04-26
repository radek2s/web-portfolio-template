import { FC } from "react";
import styles from '@/styles/HomeHero.module.scss'
import { MainAnimation } from "./MainAnimation";

export const Hero:FC = () => {

    return (<div className={`${styles.hero}`}>
        <div className={`${styles.heroHeader}`}>
            <div className={`${styles.heroMain}`}>
        <p className={`${styles.pretitle}`}>Hi, my name is</p>
        <h1 className={`${styles.title}`}>Radek Jajko</h1>
        <p className={`${styles.subtitle}`}>I am a software engineer, passionate about creating 
visually appealing and user-friendly web applications 
that cater not only to clients but also to fellow developers 
through the code I produce</p>
<button>Show more</button>

            </div>
            <div>
                <MainAnimation/>
            </div>

        </div>

        <div className={`${styles.heroContent}`}>
        <div className={`${styles.resultsWrapper}`}>
            <div className={`${styles.results}`}>
                <span className={`${styles.key}`}>9</span>
                <span>enterprise<br/>projects</span>
            </div>
            <div className={`${styles.results}`}>
                <span className={`${styles.key}`}>5</span>
                <span>designed and released<br/>web applications</span>
            </div>
            <div className={`${styles.results}`}>
                <span className={`${styles.key}`}>6+</span>
                <span>open-source<br/>projects</span>
            </div>
        </div>

        <div className={`${styles.quoteWrapper}`}>
            <p className={`${styles.quoteText}`}>“Clean code always looks like it was <br/>written by someone who cares.”</p>
            <span className={`${styles.quoteAuthor}`}>― Robert C. Martin, Clean Code</span>
        </div>
        </div>

        
        
    </div>)

}