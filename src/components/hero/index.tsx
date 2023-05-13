import { FC, useEffect, useState } from "react";

import { SectionWrapper } from "@/layout/SectionWrapper";
import { SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";

import { MainAnimation } from "./MainAnimation";
import { FeaturedItem } from "./FeaturedItem";
import styles from './hero.module.scss'

export const Hero: FC = () => {
    const [isVisible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => { setVisible(true) }, 3000)
    }, [])

    function moveToNext() {
        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <SectionWrapper variant="start" className={styles['hero']}>
            <header>
                <SlideUpWrapper className={styles['hero-header']}>
                    <p className={styles['header--subtitle']}>Hi, my name is</p>
                    <h1 className={styles['header--title']}>Radek Jajko</h1>
                    <p className={styles['header--description']}>
                        I am a software engineer, passionate about creating
                        visually appealing and user-friendly web applications
                        that cater not only to clients but also to fellow developers
                        through the code I produce</p>
                    <button onClick={moveToNext}>Show more</button>
                </SlideUpWrapper>

                <div className={styles['hero-animation']}>
                    {isVisible && <MainAnimation />}
                </div>
            </header>

            <section className={styles['hero-content']}>
                <SlideUpWrapper className={styles["featured-items"]} delay={1.8}>
                    <FeaturedItem result={9} name="enterprise\nprojects" delay={2} />
                    <FeaturedItem result={5} name="designed and released\nweb applications" delay={2.4} />
                    <FeaturedItem result={6} name="open-source\nprojects" delay={2.8} />
                </SlideUpWrapper>

                <SlideUpWrapper className={styles["quote"]} delay={4}>
                    <p className={styles["quote--text"]}>“Clean code always looks like it was <br />written by someone who cares.”</p>
                    <span className={styles["quote--auhtor"]}>― Robert C. Martin, Clean Code</span>
                </SlideUpWrapper>
            </section>
        </SectionWrapper >)

}

export default Hero