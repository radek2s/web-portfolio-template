import { FC } from "react";

import Icon from "../icons/IconWrapper";
import Image from 'next/image'
import { TechStackIcons } from "./TechStackIcons";
import styles from './about.module.scss'


export const About: FC = () => {

    return (<div>
        <div className={styles.about}>
            <div>
                <h2>About me</h2>
                <p className={styles.subTitle}>I&apos;m a software engineer expirienced in full-stack web-development.</p>
                <p className={styles.description}>Hi! I&apos;m Radosław Jajko, a Web Developer from Kraków. Since 2016
                    I&apos;m working with frontend frameworks like Angular, Vue and React.
                    I am passionate about designing and creating good UI and UX for web applications.

                    I am also experienced in functional and OOP programming.</p>
            </div>
            <div className={styles.profileWrapper}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <Image className={styles.circle3} src="/images/Radek.png" alt="Test" width={375} height={375} />


            </div>
        </div>


        <div className={styles.techStackWrapper}>
            <TechStackIcons />

        </div>
    </div>)

}