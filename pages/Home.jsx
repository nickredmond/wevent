import { PrimaryButton } from "../components/PrimaryButton";
import styles from "../styles/home.module.scss";

export function Home() {
    return (
        <div className={styles.contentArea}>
            <div>
                <p className={styles.title}>Sometimes, the best way we can help another person is by simply lending an ear.</p>
                <PrimaryButton 
                    text="I want to help"
                    iconSrc="chevron-right-dark.png"
                    hoverIconSrc="chevron-right-light.png"
                    href="/intro/Listen" />
            </div>
            <div>
                <p className={styles.title}>Other times, we just need to vent.</p>
                <PrimaryButton 
                    text="Let it out" 
                    iconSrc="chevron-right-dark.png"
                    hoverIconSrc="chevron-right-light.png"
                    href="/intro/vent" />
            </div>
        </div>
    );
}