"use client";

import React, { useState } from "react";
import { Input, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
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
				}}>
				<div style={{ marginTop: "20px" }}>
					<Title
						level={3}
						style={{ color: "#fff" }}>
						Sidebar
					</Title>
					<Text style={{ color: "#fff" }}>This is a sliding sidebar.</Text>
				</div>
			</div>
			<MenuOutlined
				onClick={toggleSidebar}
				style={{
					position: "fixed",
					top: "20px",
					left: "20px",
					fontSize: "24px",
					cursor: "pointer",
					color: sidebarVisible ? "#fff" : "#000",
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
					<Title level={2}>Hi, I'm Chatterbox.</Title>
				</div>
				<div style={{ marginBottom: "15px" }}>
					<Text>How can I help you today?</Text>
				</div>
				<TextArea
					style={{ borderRadius: "25px", padding: "14px" }}
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
			</div>
		</div>
	);
};

export default Home;
