import { Row, Col, Tag, Typography } from "antd";
import { useClickOutside } from "../../../utils/clickHandler";
import { useRef } from "react";

interface Props {
  visible: boolean;
  setVisible: (vissible: boolean) => void;
}
export const MegaMenu = ({ visible, setVisible }: Props) => {
  const { Title, Text } = Typography;

  return (
    <div
      className="mega-menu-wrapper"
      style={{ display: visible ? "block" : "none" }}
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
  );
};
