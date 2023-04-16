import Image from "next/image";
import styles from "../styles/primaryButton.module.scss";

export function PrimaryButton({ text, iconSrc, hoverIconSrc, iconAlt }) {
    const alternateText = iconAlt ?? 'button icon';
    // const hoverStyleText = hoverIconSrc && `
    //     .${styles.icon}:after {background: url('/images/${hoverIconSrc}'); opacity: 0;}
    //     .${styles.icon}:hover:after {opacity: 1;}
    // `;
    return (
        <div>
            <button className={styles.button} type="button">
                {text}
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
                    alt={alternateText} />}
            </button>
        {/* {hoverStyleText && <style>
                {hoverStyleText}
            </style>} */}
        </div>
    );
}