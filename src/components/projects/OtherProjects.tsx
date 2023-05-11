import { SectionWrapper } from "@/layout/SectionWrapper";
import { FC } from "react";
import { ProjectCard } from "./ProjectCard";
import { SimpleProjectCard } from "./SimpleProjectCard";
import { SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";
import styles from './otherProjects.module.scss';

export const OtherProjects: FC = () => {
    return <SectionWrapper>
        <div className="content-section">
            <h2 className="text-right">Other projects</h2>

            <div>
                <SlideUpWrapper className={styles['projects-wrapper']}>
                    <SimpleProjectCard
                        name="Karcioszki the Game"
                        stack={["ANGULAR", "TypeScript", "JAVA", "SPRING", "WEBSOCKETS"]}
                        description="ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment."
                        repositoryUrl="https://github.com/radek2s/KarcioszkiGame"
                    />

                    <SimpleProjectCard
                        name="DA Kraków"
                        stack={["WordPress", "JavaScript", "CSS"]}
                        description="ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment."
                        demoUrl="https://da-krakow.pl/"
                    />

                    <SimpleProjectCard
                        name="Company People Management"
                        stack={["WordPress", "JavaScript", "CSS"]}
                        description="ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment."
                        repositoryUrl="https://github.com/radek2s/Company-People-Management"
                    />

                    <SimpleProjectCard
                        name="Learning Survey"
                        stack={["WordPress", "JavaScript", "CSS"]}
                        description="ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment."
                    />

                    <SimpleProjectCard
                        name="Spływ 100-lecia"
                        stack={["WordPress", "JavaScript", "CSS"]}
                        description="ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment."
                        demoUrl="https://splyw100lecia.pl/"
                    />

                    <SimpleProjectCard
                        name="Scada Reforged"
                        stack={["Kotlin", "Angular", "Docker"]}
                        description="ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment."
                        repositoryUrl="https://github.com/radek2s/Scada-Reforged"
                    />
                </SlideUpWrapper>

            </div>

        </div>

    </SectionWrapper>
}