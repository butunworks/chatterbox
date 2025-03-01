"use client";

// Import React and required hooks/components from antd and other libraries
import React, { useState, useEffect, useRef } from "react";
import { Input, Typography, Button, Tooltip, ConfigProvider, Flex } from "antd";
import "../globals.css";
import {
	DoubleRightOutlined,
	SearchOutlined,
	MessageOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { createStyles } from "antd-style";

// Import the custom BackgroundLines component
import { BackgroundLines } from "../../BackgroundLines.js";
import { ColourfulText } from "../../ColourfulText";

const { TextArea } = Input;
const { Title, Text } = Typography;

// Create custom styles using createStyles from antd-style
const useStyle = createStyles(({ prefixCls, css }) => ({
	// Style for the gradient button used for New Chat
	linearGradientButton: css`
		&.${prefixCls}-btn-primary:not([disabled]):not(
				.${prefixCls}-btn-dangerous
			) {
			> span {
				position: relative;
			}
			&::before {
				content: "";
				background: linear-gradient(135deg, rgb(65, 65, 65), #808080, #ffffff);
				position: absolute;
				inset: -1px;
				opacity: 1;
				transition: all 0.3s;
				border-radius: 50px;
			}
			&:hover::before {
				opacity: 0.5;
			}
		}
	`,
	// Updated animated button style
	animatedButton: css`
		transition: transform 0.2s ease;
		transform-origin: center;
		&:hover {
			transform: scale(1.02);
		}
		&:active {
			transform: scale(0.98);
		}
	`,
	// New style for Chat History buttons
	chatHistoryButton: css`
		width: calc(100% - 20px);
		height: 50px;
		border-radius: 50px;
		margin-bottom: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(54, 54, 54);
		border: none;
		transition: background-color 0.3s;
		&:hover {
			background-color: rgb(31, 31, 31);
		}
	`,
	scrollableChatHistory: css`
		max-height: 370px;
		overflow-x: hidden;
		overflow-y: auto;
		animation: fadeIn 0.5s ease-in;
		scrollbar-width: thin;
		&::-webkit-scrollbar {
			width: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 3px;
		}
	`,
}));

// Main component: Home page
const Home = () => {
	// State for the text area value
	const [value, setValue] = useState("");
	// State determining if the sidebar is visible
	const [sidebarVisible, setSidebarVisible] = useState(false);
	// New state to control the textarea animation
	const [animateTextArea, setAnimateTextArea] = useState(false);
	// New state for messages
	const [messages, setMessages] = useState([]);
	const [textAreaPosition, setTextAreaPosition] = useState(0);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		// Scrolls to bottom when messages change
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	// Extract the styles from our custom useStyle hook
	const { styles } = useStyle();

	// Function to toggle the sidebar visibility
	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	// Handler for the send button click
	const handleSendClick = () => {
		if (value.trim().length >= 1) {
			// Move the textarea downward only once (it won't update on subsequent clicks or new AI messages)
			if (textAreaPosition === 0) {
				setTextAreaPosition(20); // Adjust the value as needed
			}
			setAnimateTextArea(true);
			// Move the current textarea value to user message bubbles
			setMessages((prev) => [...prev, { role: "user", text: value }]);
			// Clear the textarea
			setValue("");
			// Simulate an AI answer after a delay.
			setTimeout(() => {
				setMessages((prev) => [
					...prev,
					{ role: "ai", text: "Aceternity code executed" },
				]);
			}, 800);
		}
		console.log("Send button clicked");
	};

	// Common style for message bubbles
	const messageBubbleStyle = {
		borderRadius: "30px",
		padding: "14px",
		backgroundColor: "rgb(227, 227, 227)",
		maxWidth: "70%",
		margin: "8px",
		fontFamily: "Helvetica Neue, sans-serif",
	};

	return (
		<BackgroundLines
			className="flex items-center justify-center w-full flex-col px-4"
			svgOptions={{ duration: 10 }}>
			<div
				style={{
					display: "flex",
					height: "100vh", // entire page height equals sidebar height
					width: "100vw",
					overflow: "hidden", // disable scrolling
				}}>
				{/* Sidebar section */}
				<div
					style={{
						position: "fixed",
						left: sidebarVisible ? 0 : "-300px",
						top: 0,
						bottom: 0,
						width: "300px",
						backgroundColor: "#000",
						color: "#fff",
						transition: "left 0.3s",
						padding: "20px",
						boxSizing: "border-box",
						borderTopRightRadius: "30px",
						borderBottomRightRadius: "30px",
						boxShadow: "2px 0 3px rgba(0, 0, 0, 0.3)",
					}}>
					<div style={{ marginTop: "50px", marginLeft: "4px" }}>
						{/* Sidebar header: Logo and App Title */}
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								marginBottom: "20px",
							}}>
							<Image
								src="/logo.png"
								alt="Logo"
								width={35}
								height={35}
								style={{
									marginRight: "10px",
									borderRadius: "10px",
								}}
							/>
							<Title
								level={2}
								style={{ color: "#fff", margin: 0 }}>
								Chatterbox
							</Title>
						</div>
						{/* New Chat button */}
						<Button
							type="primary"
							className={styles.linearGradientButton}
							icon={<MessageOutlined />}
							style={{ marginTop: "10px", width: "calc(100% - 20px)" }} // updated width
						>
							New Chat
						</Button>
						{/* Section title for Chats */}
						<Title
							level={3}
							style={{ color: "#fff", marginTop: "20px" }}>
							Chats
						</Title>
						<Text style={{ color: "#fff" }}></Text>
						{/* Chat History section */}
						<div
							className={styles.scrollableChatHistory}
							style={{ marginTop: "20px" }}>
							<ConfigProvider>
								{[...Array(7)].map((_, index) => (
									<Button
										key={index}
										type="primary"
										className={`${styles.animatedButton} ${styles.chatHistoryButton}`}
										style={{ marginTop: "10px" }}
										onClick={() =>
											console.log(`Chat History ${index + 1} clicked`)
										}>
										Chat History {index + 1}
									</Button>
								))}
							</ConfigProvider>
						</div>
					</div>

					<div
						style={{
							position: "absolute",
							bottom: "20px",
							left: "20px",
							right: "20px",
						}}>
						<Button
							type="primary"
							variant="text"
							icon={<SettingOutlined />}
							className={styles.animatedButton}
							style={{
								width: "100%",
								backgroundColor: "transparent",
								border: "none",
								color: "#fff",
								display: "flex",
								justifyItems: "center",
							}}>
							Settings
						</Button>
					</div>
				</div>

				{/* Sidebar toggle button */}
				<DoubleRightOutlined
					onClick={toggleSidebar}
					style={{
						position: "fixed",
						top: "20px",
						left: "20px",
						fontSize: "24px",
						cursor: "pointer",
						color: sidebarVisible ? "#fff" : "#000",
						transform: sidebarVisible ? "rotate(180deg)" : "rotate(0deg)",
						transition: "transform 0.3s",
					}}
				/>

				{/* Main chat section */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "70%",
						width: "40%",
						position: "absolute",
						top: "50%",
						bottom: "50%",
						left: "50%",
						right: "50%",
						transform: "translate(-50%, -50%)",
					}}>
					{/* Conditionally render header section and helper text */}
					{!animateTextArea && (
						<>
							{/* Header section with logo and greeting */}
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "10px",
								}}>
								<Image
									src="/logo.png"
									alt="Logo"
									width={35}
									height={35}
									style={{
										marginRight: "10px",
										borderRadius: "10px",
									}}
								/>
								<Title
									level={2}
									style={{ margin: "0" }}>
									Hi, I'm <ColourfulText text={"Chatterbox"} />.
								</Title>
							</div>
							{/* Helper text */}
							<div style={{ marginBottom: "25px" }}>
								<Text>How can I help you today?</Text>
							</div>
						</>
					)}

					{/* Message bubbles container */}
					{animateTextArea && (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								height: "100%",
								overflowY: "auto",
								overflowX: "hidden",
								padding: "20px",
							}}>
							{messages.map((msg, idx) => (
								<div
									key={idx}
									style={{
										...messageBubbleStyle,
										alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
									}}>
									{msg.text}
								</div>
							))}
							<div ref={messagesEndRef} />
						</div>
					)}

					{/* Text input and send button container */}
					<div
						style={{
							width: "100%",
							marginBottom: "20px",
							position: "relative",
							transform: `translateY(${textAreaPosition}px)`,
							transition: "transform 0.3s ease",
						}}>
						<TextArea
							allowClear
							style={{
								borderRadius: "30px",
								padding: "14px",
							}}
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
								console.log("TextArea value:", e.target.value);
							}}
							onKeyDown={(e) => {
								// If Enter is pressed without Shift, trigger the search button
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleSendClick();
								}
							}}
							placeholder="Talk to Chatterbox..."
							maxLength={1500}
							showCount={false}
							autoSize={{
								minRows: 3,
								maxRows: 5,
							}}
						/>
						{/* Send button positioned over the TextArea */}
						<div
							style={{
								position: "absolute",
								right: "10px",
								bottom: "10px",
								zIndex: 1,
							}}>
							<Button
								variant="solid"
								shape="circle"
								icon={<SearchOutlined style={{ color: "#fff" }} />}
								style={{
									backgroundColor: "#000",
									border: "none",
								}}
								onClick={handleSendClick}
							/>
						</div>
					</div>
				</div>
			</div>
		</BackgroundLines>
	);
};

export default Home;
