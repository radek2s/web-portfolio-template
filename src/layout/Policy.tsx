import { FC, useEffect, useState } from "react";
import styles from "@/styles/Policy.module.scss"

export const Policy: FC = () => {
    const [visible, setVisible] = useState<boolean>(true)
    const [policyVisible, setPolicyVisible] = useState<boolean>(false)

    useEffect(() => {
        if (!!localStorage.getItem("cookie-consent")) {
            setVisible(false)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true")
        setVisible(false)
    }

    const togglePolicy = () => {
        setPolicyVisible((policy) => !policy)
    }

    return (visible ? (
        <div className={styles['policy']}>
            <header className={styles['policy-header']}>
                <span>
                    On my portfolio page I am using Google Analytics to collect user data to
                    understand how you use my website.<br />Based on that data I will improve
                    its design and functionality.<br />
                    If you continue to use this site I will assume that you are happy with it.
                </span>
                <div className={styles['policy-actions']}>
                    <button className="btn-small" onClick={() => handleAccept()}>I agree</button>
                    <button className="btn-text" onClick={togglePolicy}>{policyVisible ? "Hide" : "Show"} discaimer</button>
                </div>
            </header>
            {policyVisible && (
                <section className={styles['policy-content']}>
                    With your consent, Google Analytics will process and collect your personal
                    data (cookies and IP address) to give valuable information. Google
                    Analytics will transfer your data to the United States and store it for
                    2 months.
                </section>
            )}
        </div>
    ) : null)

}