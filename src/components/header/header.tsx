import React, { useState } from "react";
import { HeaderLogo } from "./widgets/header-logo";
import { Col, Row, Tag, Typography } from "antd";

interface Props {}
export const Header = ({}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { Title, Text } = Typography;

  const onHeaderPrimaryClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Row className="header-wrapper">
        <Col lg={6} xl={3} md={6} sm={12} xs={12}>
          <div style={{ width: "80%" }}>
            <HeaderLogo
              onClick={onHeaderPrimaryClick}
              showMegaMenu={showMenu}
            />
          </div>
        </Col>
        <Col span={20}></Col>
      </Row>
      <div
        className="mega-menu-wrapper"
        style={{ display: showMenu ? "block" : "none" }}
      >
        <Row>
          <Col span={4} className="mega-menu-column">
            <Title className="mega-menu-title">Shortcuts</Title>
            <div>
              <Text className="mega-menu-item">Business Hub</Text>
              <Text className="mega-menu-item">Home Feed</Text>
            </div>
          </Col>
          <Col span={4} className="mega-menu-column">
            <Title className="mega-menu-title">Create</Title>
            <div>
              <Text className="mega-menu-item">Paid</Text>
              <Text className="mega-menu-item">
                Create Pin for ad <Tag color="#55acee">Beta</Tag>
              </Text>
              <Text className="mega-menu-item">Create Pin for Idea ad</Text>
              <Text className="mega-menu-item">Create Pin </Text>
            </div>
          </Col>

          <Col span={4} className="mega-menu-column">
            <Title className="mega-menu-title">Create</Title>
            <div>
              <Text className="mega-menu-item">Paid</Text>
              <Text className="mega-menu-item">
                Create Pin for ad <Tag color="#55acee">Beta</Tag>
              </Text>
              <Text className="mega-menu-item">Create Pin for Idea ad</Text>
              <Text className="mega-menu-item">Create Pin</Text>
            </div>
          </Col>
          <Col span={4} className="mega-menu-column">
            <Title className="mega-menu-title">Analytics</Title>
            <div>
              <Text className="mega-menu-item">Overview</Text>
              <Text className="mega-menu-item">Audience insights</Text>
              <Text className="mega-menu-item">
                Conversion insights <Tag color="#55acee">Beta</Tag>
              </Text>
              <Text className="mega-menu-item">Trends</Text>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
