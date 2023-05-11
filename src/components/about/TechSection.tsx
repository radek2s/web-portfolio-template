import { FC } from "react";
import { SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";
import { Tooltip } from "@/layout/Tooltip";
import { Icon, IconName } from "../icons";
import styles from './techSection.module.scss';

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

/**
 * Tech Section Wrapper Component
 * Render list of all known languages, libraries or tools
 * that you are familiar with.
 */
export const TechSection: FC = () => {
    return (
        <SlideUpWrapper className={styles['tech--wrapper']} duration={0.08}>
            {knownTechStack.map(({ icon, tooltip }) =>
                <div key={icon} className={styles['tech-badge']}>
                    <Tooltip text={tooltip}>
                        <Icon name={icon} className={styles['tech-badge--icon']} />
                    </Tooltip>
                </div>
            )}
        </SlideUpWrapper>
    )
}

export default TechSection