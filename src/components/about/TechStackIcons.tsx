import { FC } from "react";
import { Icon, IconName } from "../icons";
import styles from './techStack.module.scss';

const knownTechStack: IconName[] = [
    'type-script',
    'angular',
    'react',
    'vue',
    'sass',
    'docker',
    'node-js',
    'kotlin',
    'java',
    'adobe-xd',
    'figma',
    'html',
    'css',
    'java-script',
    'word-press'
]

export const TechStackIcons:FC = () => {
    return (<div className={styles.techStackWrapper}>
        {knownTechStack.map(tech => <Icon name={tech} key={tech}/>)}
    </div>)
}