import React, { useRef, useState } from "react";
import { HeaderLogo } from "./widgets/header-logo";
import { Col, Row } from "antd";
import { useClickOutside } from "../../utils/clickhandler";
import { MegaMenu } from "./widgets/mega-menu";
import {
  ArrowDownOutlined,
  BellFilled,
  CaretDownOutlined,
  DownOutlined,
  MessageOutlined,
  NotificationOutlined,
  SearchOutlined,
  WechatOutlined,
} from "@ant-design/icons";

interface Props {}
export const Header = ({}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef(null);

  const onHeaderPrimaryClick = () => {
    setShowMenu(!showMenu);
  };
  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });
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
      <MegaMenu ref={menuRef} visible={showMenu} />
    </>
  );
};
