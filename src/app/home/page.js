"use client";

import React, { useState } from "react";
import { Input, Image, Button, ConfigProvider, Space } from "antd";
import { Typography } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
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
				background: linear-gradient(135deg, rgb(0, 0, 0), rgb(117, 117, 117));
				position: absolute;
				inset: -1px;
				opacity: 1;
				transition: all 0.3s;
				border-radius: inherit;
			}
			&:hover::before {
				background: linear-gradient(135deg, rgb(117, 117, 117), rgb(0, 0, 0));
				opacity: 1;
			}
			&:active::before {
				background: linear-gradient(135deg, rgb(0, 0, 0), rgb(255, 255, 255));
				opacity: 1;
			}
		}
	`,
}));

const App = () => {
	const { styles } = useStyle();
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
				style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
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
				autoSize={{
					minRows: 3,
					maxRows: 5,
				}}
			/>
			<div style={{ marginTop: "20px" }}>
				<ConfigProvider
					button={{
						className: styles.linearGradientButton,
					}}>
					<Space>
						<Button
							type="primary"
							size="large"
							icon={<AntDesignOutlined />}>
							Search
						</Button>
					</Space>
				</ConfigProvider>
			</div>
		</div>
	);
};

export default App;
