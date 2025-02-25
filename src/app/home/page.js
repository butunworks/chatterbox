"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export default function Home() {
	const [email, setEmail] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<div className={pixelifySans.container}>
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
			<div className={styles.mainText}>
				Craft your own AI Chatbot effortlessly!
			</div>
			<div className={styles.subText}>
				Unleash the power of artificial intelligence without coding! Build,
				customize, and deploy your unique chatbot with our intuitive platform.
			</div>
			<div className="emailContainer">
				<Image
					src="/mailicon.png"
					alt="Email icon"
					width={24}
					height={24}
					className={styles.emailIcon}></Image>
				<input
					type="email"
					placeholder="Enter your e-mail..."
					value={email}
					onChange={handleEmailChange}
					className={styles.emailInput}
				/>
				<input
					type="submit"
					value="Get Started"
					className={styles.emailButton}
				/>
			</div>
		</div>
	);
}
