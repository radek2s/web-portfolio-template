import Card from "@/layout/Card";
import { FC } from "react";
import Image from 'next/image';
import styles from './work.module.scss';
import { ProjectCard } from "./ProjectCard";
import { SectionWrapper } from "@/layout/SectionWrapper";

export const Work: FC = () => {
    return (<SectionWrapper>
        <div className="content-section">
            <h2>Featured projects</h2>

            <div className={styles['projects']}>
                <ProjectCard
                    imageSrc={"/images/proj_ScadaLTS.png"}
                    project={{
                        name: "Scada-LTS UI 2.0",
                        stack: ["VUE", "JAVASCRIPT", "RESTAPI", "WEBSOCKETS", "DOCKER", "CI/CD", "JAVA"],
                        description: "ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environmen",
                        repositoryUrl: "https://github.com/SCADA-LTS/Scada-LTS"
                    }}
                />

                <ProjectCard
                    variant="right"
                    imageSrc={"/images/proj_FrameworkHero.png"}
                    project={{
                        name: "Framework-Hero",
                        stack: ["React", "ANGULAR", "VUE", "SCSS", "CI/CD"],
                        description: "Idea to create this project were born in 2021 when me and my wife were trying to write a simple application in React. For me that was the first time when I get acquainted with this most popular Framework. But it looks very similar to other frameworks taht I used in my short JavaScript career. I ve started my Frontend adventure using Angular 4 in 2017. Soon just after graduation in 2020 I was hired to company where used Vue.js",
                        demoUrl: "https://radek2s.github.io/Framework-Hero/angular",
                        repositoryUrl: "https://github.com/radek2s/Framework-Hero"
                    }}
                />

                <ProjectCard
                    imageSrc={"/images/proj_ScadaLTS.png"}
                    project={{
                        name: "Bet Keeper",
                        stack: ["React", "TypeScript", "Firebase", "PWA", "NodeJS", "DOCKER"],
                        description: "ProProgressive Web Application (PWA) build with React and Typescript to manage and display bets between two people. Store data on local database by using dedicated Node Server or connect to your own Firebase store.\nStable version of application is hosted on GitHub Pages. To check how it looks like just open the running environment.",
                        repositoryUrl: "https://github.com/radek2s/BetKeeper",
                        demoUrl: "https://radek2s.github.io/BetKeeper/#/list"
                    }}
                />



            </div>

            {/* <div className={styles['link-wrapper']}>
                <a href="" className={styles['link--element']}>show more</a>
            </div> */}
        </div>

    </SectionWrapper>
    )
}