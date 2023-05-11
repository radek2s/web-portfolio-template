import { FC } from "react";
import Card from "../../layout/Card";
import styles from './Expirience.module.scss'
import { SectionWrapper } from "@/layout/SectionWrapper";
import { SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";
import { ExpirienceCard } from "./card/ExpirienceCard";

export const Expirience: FC = () => {
    return (
        <SectionWrapper><div className="content-section">
            <h2 className="text-right">Professional expirience</h2>
            <SlideUpWrapper className={styles['expirience-timeline']}>
                <ExpirienceCard
                    icon="person-work"
                    title="Full-Stack Developer @ Nivalit Sp. z o.o."
                    timeline="2022 - present"
                >
                    In Nivalit I am a Team Leader for Vivelio project
                </ExpirienceCard>
                <ExpirienceCard
                    icon="person-work"
                    title="Full-Stack Developer @ SoftQ Sp. z o.o."
                    timeline="2021 - 2022"
                />
                <ExpirienceCard
                    icon="studies"
                    title="MSc in Telecommunications @ AGH UST Kraków"
                    timeline="2021"
                />
            </SlideUpWrapper>
        </div></SectionWrapper>
    )
}