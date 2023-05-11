import { FC, useState } from "react";
import { Icon, IconName } from "@/components/icons";
import Card from "@/layout/Card";
import styles from './expirienceCard.module.scss'

interface Props {
    icon: IconName
    position: string
    company: string
    timeline: string
    children?: React.ReactNode
}
export const ExpirienceCard: FC<Props> = ({ icon, position, company, timeline, children }) => {
    const [isOpened, setOpened] = useState<boolean>(false)

    return (<Card className={styles['card']}>
        <header>
            <Icon name={icon} className={styles['header-icon']} />
            <div className={styles['header-title']}>
                <span className={styles['header-position']}>{position}</span>
                <span className={styles['header-company']}> @ {company}</span>
            </div>
            <span className={styles['header-time']}>{timeline}</span>
            {children && (
                <div
                    className={`${styles['header-toggle']} ${isOpened ? styles['active'] : ''}`}
                    onClick={() => setOpened(opened => !opened)}
                >
                    <Icon name="caret-down" />
                </div>
            )}
        </header>
        {isOpened && (<section className={styles['section-wrapper']}>
            {children}
        </section>)}
    </Card>)
}