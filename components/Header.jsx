import Image from "next/image";
import styles from "../styles/header.module.scss";
import headerLogo from "../public/images/wevent.png";

export function Header() {
    return (
        <div className={styles.header}>
            <a href="/">
                <Image 
                    src={headerLogo}
                    alt="logo"
                    className={styles.logo} />
            </a>
        </div>
    );
}