"use client";

import React, { useState } from "react";
import { Input, Image } from "antd";
import { Typography } from "antd";
const { TextArea } = Input;
const { Title, Text, Link } = Typography;

const App = () => {
	const [value, setValue] = useState("");
	return (
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
				style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
				<Image
					src="/logo.png"
					alt="Logo"
					style={{
						width: "35px",
						height: "35px",
						marginRight: "10px",
						borderRadius: "10px",
					}}
				/>
				<Title level={2}>Hi, I\'m Chatterbox.</Title>
			</div>
			<div style={{ marginBottom: "20px" }}>
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
				autoSize={{
					minRows: 3,
					maxRows: 5,
				}}
			/>
		</div>
	);
};

export default App;
