"use client";

import React, { useState } from "react";
import { Input, Typography, Button, Tooltip } from "antd";
import { DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";

const { TextArea } = Input;
const { Title, Text } = Typography;

const Home = () => {
	const [value, setValue] = useState("");
	const [sidebarVisible, setSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	return (
		<div style={{ display: "flex", height: "100vh", width: "100vw" }}>
			<div
				style={{
					position: "fixed",
					left: sidebarVisible ? 0 : "-250px",
					top: 0,
					bottom: 0,
					width: "250px",
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
					<Title
						level={3}
						style={{ color: "#fff" }}>
						Chats
					</Title>
					<Text style={{ color: "#fff" }}></Text>
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
						style={{ marginBottom: "0" }}>
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
