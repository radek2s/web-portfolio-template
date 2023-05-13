import { FC } from "react";
import { SectionWrapper } from "@/layout/SectionWrapper";

import { ProjectCard } from "./card";
import styles from './featuredProjects.module.scss';

export const FeaturedProjects: FC = () => {
    return (<SectionWrapper>
        <div className="content-section">
            <h2>Featured projects</h2>

            <div className={styles['projects']}>
                <ProjectCard
                    imageSrc={"/images/proj_ScadaLTS3.png"}
                    project={{
                        name: "Scada-LTS UI 2.0",
                        stack: ["VUE", "JAVASCRIPT", "RESTAPI", "WEBSOCKETS", "DOCKER", "CI/CD", "JAVA"],
                        description: "Scada-LTS is an Open Source platform to build your own SCADA solution.\nIn this project I was responsible for moving from Java Server Page UI to standalone and modern Vue.js application. Frontend must keep synchronization within server and user actions because data presented on dashboards are real values from physical measurement devices.",
                        repositoryUrl: "https://github.com/SCADA-LTS/Scada-LTS"
                    }}
                />

                <ProjectCard
                    variant="right"
                    imageSrc={"/images/proj_FrameworkHero.png"}
                    project={{
                        name: "Framework-Hero",
                        stack: ["React", "ANGULAR", "VUE", "SCSS", "CI/CD"],
                        description: "Idea for this project was to create a shared structure of the pages for three most popular frontend frameworks. At every page I try to explain how to achieve some action in specific framework. Most of the concepts are very simillar in various frameworks but the way how to achive them is a little bit different.\nIf you are a developer that has to switch the framework you can check this project.",
                        demoUrl: "https://radek2s.github.io/Framework-Hero/angular",
                        repositoryUrl: "https://github.com/radek2s/Framework-Hero"
                    }}
                />

                <ProjectCard
                    imageSrc={"/images/proj_BetKeeper2.png"}
                    project={{
                        name: "Bet Keeper",
                        stack: ["React", "TypeScript", "Firebase", "PWA", "NodeJS", "DOCKER"],
                        description: "Simple Progressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store your bets on local database by using dedicated Node Server or connect to Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment.",
                        repositoryUrl: "https://github.com/radek2s/BetKeeper",
                        demoUrl: "https://radek2s.github.io/BetKeeper/#/list"
                    }}
                />
            </div>
        </div>
    </SectionWrapper>
    )
}