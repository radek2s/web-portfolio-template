import { FC } from "react";

import Icon from "../icons/IconWrapper";
import Image from 'next/image'
import TechSection from "./TechSection";
import styles from './about.module.scss'
import { SectionWrapper } from "@/layout/SectionWrapper";


export const About: FC = () => {

    return (
        <SectionWrapper><>
            <div className={styles['about-wrapper']} id="about">
                <div className={styles['about-text']}>
                    <header>
                        <h2>About me</h2>
                        <p>I&apos;m a software engineer expirienced in full-stack web-development.</p>
                    </header>
                    <p>
                        Hi! I&apos;m Radosław Jajko, a Web Developer from Kraków. Since 2016
                        I&apos;m working with frontend frameworks like Angular, Vue and React.
                        I am passionate about designing and creating good UI and UX for web applications.
                        I am also experienced in functional and OOP programming.
                    </p>
                </div>
                <div className={styles['about-avatar']}>
                    <div className={styles['avatar-circle-1']}></div>
                    <div className={styles['avatar-circle-2']}></div>
                    <Image className={styles['avatar-circle-3']} src="/images/profileAvatar.png" alt="User profile picture" width={375} height={375} />
                </div>
            </div>


            <div className={styles['tech-section']}>
                <TechSection />
            </div>
        </>
        </SectionWrapper>
    )

}