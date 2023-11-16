import React, { useRef, useState } from "react";
import { HeaderLogo } from "./widgets/header-logo";
import { Col, Row } from "antd";
import { MegaMenu } from "./widgets/mega-menu";
import {
  BellFilled,
  CaretDownOutlined,
  MessageOutlined,
  NotificationOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useClickOutside } from "../../utils/clickHandler";

interface Props {}
export const Header = ({}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });
  const onHeaderPrimaryClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Row className="header-wrapper" ref={menuRef}>
        <Col lg={6} xl={3} md={6} sm={12} xs={12}>
          <div style={{ width: "80%" }}>
            <HeaderLogo
              onClick={onHeaderPrimaryClick}
              showMegaMenu={showMenu}
            />
          </div>
        </Col>
        <Col lg={18} xl={21} md={18} sm={12} xs={12}>
          <div className="header-icon-wrapper">
            <SearchOutlined className="header-icon" />
            <BellFilled className="header-icon" />
            <MessageOutlined className="header-icon" />
            <NotificationOutlined className="header-icon" />
            <img
              className="header-icon"
              src="./images/zainkh.jpg"
              height={24}
              width={24}
              alt="zainkh"
            />
            <CaretDownOutlined className="header-icon-dowpdown" />
          </div>
        </Col>
      </Row>
      <MegaMenu visible={showMenu} setVisible={setShowMenu} />
    </>
  );
};
