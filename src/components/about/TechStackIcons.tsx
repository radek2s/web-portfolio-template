import { FC } from "react";
import { Icon, IconName } from "../icons";
import styles from './techStack.module.scss';
import { SlideUpWrapper } from "@/layout/SlideUpWrapper";

type TechStackType = {
    icon: IconName,
    tooltip: string
}

const knownTechStack: TechStackType[] = [{
    icon: 'type-script',
    tooltip: 'TypeScript'
}, {
    icon: 'angular',
    tooltip: 'Angular'
}, {
    icon: 'react',
    tooltip: 'React'
}, {
    icon: 'vue',
    tooltip: 'Vue.js'
}, {
    icon: 'sass',
    tooltip: 'Sass'
}, {
    icon: 'docker',
    tooltip: 'Docker'
}, {
    icon: 'node-js',
    tooltip: 'NodeJS'
}, {
    icon: 'kotlin',
    tooltip: 'Kotlin'
}, {
    icon: 'java',
    tooltip: 'Java'
}, {
    icon: 'adobe-xd',
    tooltip: 'Adobe XD'
}, {
    icon: 'figma',
    tooltip: 'Figma'
}, {
    icon: 'html',
    tooltip: 'HTML'
}, {
    icon: 'css',
    tooltip: 'CSS3'
}, {
    icon: 'java-script',
    tooltip: 'JavaScript ES6+'
}, {
    icon: 'word-press',
    tooltip: 'WordPress'
}]

export const TechStackIcons: FC = () => {
    return (
        <SlideUpWrapper className={styles['tech--wrapper']} duration={0.08}>
            {knownTechStack.map(({ icon, tooltip }) => <div key={icon} className={styles['tech-badge']}>
                <Icon name={icon} className={styles['tech-badge--icon']} />
                <span className={styles['tech-badge--tooltip']}>{tooltip}</span>
            </div>)}
        </SlideUpWrapper>
    )
}