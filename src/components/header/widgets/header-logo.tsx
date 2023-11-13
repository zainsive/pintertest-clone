import { GithubOutlined, MenuOutlined } from "@ant-design/icons";
import "../header.css";
import { useState } from "react";
import { Col, Row, Typography } from "antd";

interface Props {
  onClick: () => void;
  showMegaMenu: boolean;
}
export const HeaderLogo = ({ onClick, showMegaMenu }: Props) => {
  const { Text } = Typography;
  return (
    <>
      <div
        className={`logo-button-wrapper ${
          showMegaMenu ? "logo-button-wrapper-dark" : ""
        }`}
        onClick={onClick}
      >
        <GithubOutlined
          style={{
            fontSize: "24px",
            color: showMegaMenu ? "#ffffff" : "#E60024",
          }}
        />
        <Text
          style={{
            color: showMegaMenu ? "#ffffff" : "#000000",
          }}
        >
          Home feed
        </Text>
        <MenuOutlined />
      </div>
    </>
  );
};
