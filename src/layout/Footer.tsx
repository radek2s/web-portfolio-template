import { FC } from "react";
import { Icon } from "@/components/icons";
import styles from '@/styles/Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer>
            <div className={styles['page-footer']}>
                <div className={styles['page-footer--links']}>
                    <a href="https://github.com/radek2s">
                        <Icon name="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/rados%C5%82aw-jajko-78a153248/">
                        <Icon name="linked-in" />
                    </a>
                </div>
                <p>Designed & build by Radosław Jajko 2023</p>
            </div>
        </footer>
    )
}