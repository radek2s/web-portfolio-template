import { FC, useEffect, useState } from "react";
import styles from '@/styles/HomeHeroAnimation.module.scss'

export const MainAnimation:FC = () => {

    const [currentStep, setStep] = useState<number>(0)
    const [processing, setProcessing] = useState<boolean>(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(step => step === 2 ? 0 : step + 1)
        }, 4000);
        return () => clearInterval(interval)
    }, [])

    const htmlStringBase = "export const HeroApplication:FC = () => {"
    const htmlString = "return (<h1>Hello World from MyApp!</h1>)}"

    useEffect(() => {
        if(currentStep === 2) {
            setProcessing(true)
            const interval = setTimeout(() => {
                setProcessing(false)
            }, 2000);
            return () => clearTimeout(interval)
        }
    }, [currentStep])

    const isActive = (step: number) => {
        return step === currentStep ? 'active' : ''

    }


    return (<div className={`${styles.animationWrapper}`}>
        <div className={`${styles.header}`}>
            <p className={`${isActive(0)}`}>Design</p>
            <p className={`${isActive(1)}`}>Develop</p>
            <p className={`${isActive(2)}`}>Deploy</p>
        </div>

        {currentStep === 0 && (
            <div className={`${styles.createWrapper}`}>
            <div className={`${styles.createComponentHeader} ${styles.card}`}>

            </div>
            <div className={styles.createComponentContent}>
                <div className={styles.createComponentNavbar}>
                    <div className={`${styles.createComponentLink} ${styles.card}`}/>
                    <div className={`${styles.createComponentLink} ${styles.card}`}/>
                    <div className={`${styles.createComponentLink} ${styles.card}`}/>

                </div>
                <div className={`${styles.createComponentPage} ${styles.card}`}>

                </div>

            </div>
        </div>

        )} 
        {currentStep === 1 && (
        <div className={`${styles.codeWrapper}`}>
            <div className={`${styles.codeBase}`}>
            {htmlStringBase}
            </div>
            <div className={`${styles.codeType}`}>
            {htmlString}
            </div>
        </div>
        )}

{currentStep === 2 && (
        <div className={`${styles.deployWrapper}`}>
            {processing ? (
                <div className={`${styles.loader}`}/>
            ) : (
            <div className={`${styles.loaderFinished}`}>
                Ready!
            </div>
            )}
        </div>
        )}

        

    </div>)
}