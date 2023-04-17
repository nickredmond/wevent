import Image from "next/image";
import styles from "../styles/primaryButton.module.scss";
import Link from "next/link";

export function PrimaryButton({ text, iconSrc, hoverIconSrc, iconAlt, href }) {
    const alternateText = iconAlt ?? 'button icon';
    const buttonText = <div>{text}
        {iconSrc && <Image 
            src={`/images/${iconSrc}`} 
            width={50} 
            height={50} 
            className={styles.icon} 
            alt={alternateText} />}
        {hoverIconSrc && <Image
            src={`/images/${hoverIconSrc}`}
            width={50}
            height={50}
            className={[styles.icon, styles.iconHover].join(" ")}
            alt={alternateText} />}</div>;
    const buttonContents = href ? <Link href={href}>{buttonText}</Link> : buttonText;
    return (
        <div>
            <button className={styles.button} type="button">
                {buttonContents}
            </button>
        </div>
    );
}