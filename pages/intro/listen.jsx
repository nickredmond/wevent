import Link from "next/link";
import styles from "../../styles/intro.module.scss";
import { PrimaryButton } from "../../components/PrimaryButton";

const Listen = () => {
    return (
        <div>
            <p className={styles.primaryText}>On the next page, you'll find some folks who are looking to vent what's inside them.</p>
            <p className={styles.secondaryText}>And a lot of the time, people aren't looking for advice or for someone to fix their problems. And almost nobody likes being told to get over it or grow up. We are often just looking for someone to way "that sounds really tough" or "I've been there before and it's hell".</p>
            <p className={styles.secondaryText}>Learn more about valuable listening skills <Link className={styles.link} href="">here</Link>.</p>
            <div>
                <p className={styles.primaryText}>Now, let's get to listening.</p>
                <div className={styles.fieldGroup}>
                    <p className={styles.inputLabel}>What do you want people to call you?</p>
                    <input className={styles.textInput} type="text" placeholder="Enter display name" aria-label="display name" />
                    <p className={styles.inputCaption}>Some examples: Nick, nicktastic, Nick R, rando23, and so on.</p>
                </div>
                <div className={styles.fieldGroup}>
                    <p className={styles.inputLabel}>Do you want to include a description of yourself, an ice breaker, or anything else to help people open up?</p>
                    <textarea className={styles.textArea} placeholder="(Optional)" type="text" rows="2" />
                    {/* <p className={styles.inputCaption}>(Optional)</p> */}
                </div>
                <div>
                    <PrimaryButton text={"Next"} iconSrc={"chevron-right-dark.png"} hoverIconSrc={"chevron-right-light.png"} />
                </div>
            </div>
        </div>
    );
};
export default Listen;