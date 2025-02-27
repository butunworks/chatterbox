import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";

export const metadata = {
	title: "Chatterbox",
	description: "Chatterbox: AI Chatbots all in one place.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/logo.png"
				/>
			</head>
			<body style={{ margin: 0, padding: 0 }}>
				<AntdRegistry>
					<ConfigProvider
						theme={{
							token: {
								// Seed Token
								colorPrimary: "#000",
								borderRadius: 1,

								// Alias Token
								colorBgContainer: "#ffffff",
							},
						}}>
						{children}
					</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	);
}
