import { PrimaryButton } from "../components/PrimaryButton";
import styles from "../styles/index.module.scss";

const Index = () => {
    return (
        <div className={styles.contentArea}>
            <div>
                <p className={styles.title}><strong>Sometimes, the best way we can help another person is by simply lending an ear.</strong></p>
                <p className={styles.title}>Giving people space to vent whatever's on their mind is something our world can always use more of.</p>
                <p className={styles.title}>WeVent connects people to give space for each other in one-on-one conversations.</p>
                <PrimaryButton 
                    text="I want to give space"
                    iconSrc="chevron-right-dark.png"
                    hoverIconSrc="chevron-right-light.png"
                    href="/intro/listen" />
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
};
export default Index;