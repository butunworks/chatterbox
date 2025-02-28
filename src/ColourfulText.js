"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }) {
	const colors = [
		"rgb(155,155,155)", // converted from rgb(249, 129, 47)
		"rgb(148,148,148)", // converted from rgb(131, 179, 32)
		"rgb(141,141,141)", // converted from rgb(47, 195, 106)
		"rgb(136,136,136)", // converted from rgb(42, 169, 210)
		"rgb(134,134,134)", // converted from rgb(232, 98, 63)
		"rgb(117,117,117)", // converted from rgb(230, 64, 92)
		"rgb(90,90,90)", // converted from rgb(4, 112, 202)
		"rgb(85,85,85)", // converted from rgb(218, 0, 171)
		"rgb(80,80,80)", // converted from rgb(183, 0, 218)
		"rgb(67,67,67)", // converted from rgb(107, 10, 255)
	];

	const [currentColors, setCurrentColors] = React.useState(colors);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			const shuffled = [...colors].sort(() => Math.random() - 0.5);
			setCurrentColors(shuffled);
			setCount((prev) => prev + 1);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return text.split("").map((char, index) => (
		<motion.span
			key={`${char}-${count}-${index}`}
			initial={{
				y: 0,
			}}
			animate={{
				color: currentColors[index % currentColors.length],
				y: [0, -3, 0],
				scale: [1, 1.01, 1],
				filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
				opacity: [1, 0.8, 1],
			}}
			transition={{
				duration: 0.5,
				delay: index * 0.05,
			}}
			className="inline-block whitespace-pre font-sans tracking-tight">
			{char}
		</motion.span>
	));
}
