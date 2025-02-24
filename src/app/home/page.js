import Image from "next/image";
import styles from "./page.module.css";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={pixelifySans.className}>
			<link
				rel="icon"
				href="/favicon.ico"
			/>
			<nav className={styles.navbar}>
				<div className={styles.navLeft}>
					<Image
						src="/icon.png"
						alt="Icon"
						width={85}
						height={85}
					/>
					<span className={styles.navbarText}>Chatterino</span>
				</div>
				<div className={styles.navCenter}>
					<a
						href="#home"
						className={styles.navLink}>
						Home
					</a>
					<a
						href="#features"
						className={styles.navLink}>
						Features
					</a>
					<a
						href="#pricing"
						className={styles.navLink}>
						Pricing
					</a>
					<a
						href="#about"
						className={styles.navLink}>
						About Us
					</a>
				</div>
				<div className={styles.navRight}>
					<a
						href="#login"
						className={styles.navButton}>
						Login
					</a>
					<a
						href="#signup"
						className={styles.navButton}>
						Sign Up
					</a>
				</div>
			</nav>
		</div>
	);
}
