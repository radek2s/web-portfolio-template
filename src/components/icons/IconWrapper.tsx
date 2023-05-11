import { FC } from "react";
import styles from './_icon.module.scss'

import { AdobeXdIcon } from "./AdobeXD";
import { AngularIcon } from "./Angular";
import { CSSIcon } from "./CSS";
import { HTMLIcon } from "./HTML";
import { ReactIcon } from "./React";
import { TypeScriptIcon } from "./TypeScript";
import { VueIcon } from "./Vue";
import { DockerIcon } from "./Docker";
import { FigmaIcon } from "./Figma";
import { JavaIcon } from "./Java";
import { JavaScriptIcon } from "./JavaScript";
import { KotlinIcon } from "./Kotlin";
import { NodeJsIcon } from "./NodeJS";
import { SassIcon } from "./Sass";
import { WordPressIcon } from "./WordPress";
import { LinkedInIcon } from "./LinkedIn";
import { GitHubIcon } from "./GitHub";
import { OpenIcon } from "./Open";
import { CertificateIcon } from "./Certificate";
import { PersonWorkIcon } from "./PersonWork";
import { StudiesIcon } from "./Studies";
import { CaretDownIcon } from "./CaretDown";

export type IconName = 'adobe-xd' | 'angular' | 'css' | 'docker' | 'figma' | 'github' | 'html' | 'java'
    | 'java-script' | 'kotlin' | 'linked-in' | 'node-js' | 'react' | 'sass' | 'type-script' | 'vue' | 'word-press'
    | 'caret-down' | 'open' | 'person-work' | 'certificate' | 'studies'

function getIcon(iconName: IconName) {
    switch (iconName) {
        case 'adobe-xd': return <AdobeXdIcon />
        case 'angular': return <AngularIcon />
        case 'css': return <CSSIcon />
        case 'docker': return <DockerIcon />
        case 'figma': return <FigmaIcon />
        case 'github': return <GitHubIcon />
        case 'html': return <HTMLIcon />
        case 'java': return <JavaIcon />
        case 'java-script': return <JavaScriptIcon />
        case 'kotlin': return <KotlinIcon />
        case 'linked-in': return <LinkedInIcon />
        case 'node-js': return <NodeJsIcon />
        case 'react': return <ReactIcon />
        case 'sass': return <SassIcon />
        case 'type-script': return <TypeScriptIcon />
        case 'vue': return <VueIcon />
        case 'word-press': return <WordPressIcon />
        case 'caret-down': return <CaretDownIcon />
        case 'certificate': return <CertificateIcon />
        case 'open': return <OpenIcon />
        case 'person-work': return <PersonWorkIcon />
        case 'studies': return <StudiesIcon />
        default: throw new Error("Unsupported icon type!")
    }
}

interface IconProps {
    name: IconName
    className?: string
}
export const IconWrapper: FC<IconProps> = ({ name, className = '' }) => {



    return <div className={`icon-wrapper ${styles.icons} ${className}`}>
        {getIcon(name)}
    </div>
}

export default IconWrapper