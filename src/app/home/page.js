"use client";

import React, { useState } from "react";
import { Input, Typography, Button, Tooltip, ConfigProvider, Flex } from "antd";
import {
	DoubleRightOutlined,
	SearchOutlined,
	MessageOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { createStyles } from "antd-style";

const { TextArea } = Input;
const { Title, Text } = Typography;

const useStyle = createStyles(({ prefixCls, css }) => ({
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
	animatedButton: css`
		transition: transform 0.2s ease;
		&:hover {
			transform: scale(1.02);
		}
		&:active {
			transform: scale(0.98);
		}
	`,
}));

const Home = () => {
	const [value, setValue] = useState("");
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const { styles } = useStyle();

	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	return (
		<div style={{ display: "flex", height: "100vh", width: "100vw" }}>
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
					<Button
						type="primary"
						className={styles.linearGradientButton}
						icon={<MessageOutlined />}
						style={{ marginTop: "10px", width: "100%" }}>
						New Chat
					</Button>
					<Title
						level={3}
						style={{ color: "#fff", marginTop: "20px" }}>
						Chats
					</Title>
					<Text style={{ color: "#fff" }}></Text>
					<ConfigProvider>
						{["20px", "10px", "10px"].map((marginTop, index) => (
							<Button
								key={index}
								type="primary"
								className={styles.animatedButton}
								style={{
									marginTop: marginTop,
									width: "100%",
									backgroundColor: "#fff",
									color: "#000",
									border: "none",
									borderRadius: "50px",
								}}>
								Chat History
							</Button>
						))}
					</ConfigProvider>
				</div>
			</div>
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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "40%",
					width: "40%",
					position: "absolute",
					top: "50%",
					bottom: "50%",
					left: "50%",
					right: "50%",
					transform: "translate(-50%, -50%)",
				}}>
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
						Hi, I'm Chatterbox.
					</Title>
				</div>
				<div style={{ marginBottom: "25px" }}>
					<Text>How can I help you today?</Text>
				</div>
				<div style={{ position: "relative", width: "100%" }}>
					<TextArea
						allowClear={true}
						style={{
							borderRadius: "30px",
							padding: "14px",
						}}
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							console.log("TextArea value:", e.target.value);
						}}
						placeholder="Talk to Chatterbox..."
						maxLength={500}
						showCount={false}
						autoSize={{
							minRows: 3,
							maxRows: 5,
						}}
					/>
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
								defaultActiveBorderColor: "000",
								defaultGhostBorderColor: "000",
								primaryShadow: "000",
							}}
							onClick={() => console.log("Send button clicked")}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
