export const metadata = {
	title: "Chatterino",
	description: "Chatterino: AI Chatbots all in one place.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</head>
			<body style={{ margin: 0, padding: 0 }}>{children}</body>
		</html>
	);
}
