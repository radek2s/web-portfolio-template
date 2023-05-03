import { FC } from "react";
import styles from './Contact.module.scss'
import { SlideUpWrapper } from "@/layout/SlideUpWrapper";
import { SectionWrapper } from "@/layout/SectionWrapper";

export const Contact: FC = () => {
    return (<SectionWrapper variant="end">
        <div className={styles['contact-section']}>
            <SlideUpWrapper className={styles['contact-section-test']}>
                <h2 className={styles['contact-section--header']}>Get in Touch</h2>
                <p className={styles['contact-section--content']}>I&apos;m currently not looking for any new opportunities, but my inboxs is always open.  Whether you have a question or just want to say hi, I’ll try my best to get back to you! </p>
                <button>Say hello</button>
            </SlideUpWrapper>
        </div>

    </SectionWrapper>
    )
}