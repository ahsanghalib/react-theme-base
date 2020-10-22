import React, { useState } from "react";
import {
  Layout as AntLayout,
  Grid,
  Drawer,
  Avatar,
  Menu,
  Dropdown,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navigation from "./Navigation";

const { Header, Footer, Sider, Content } = AntLayout;
const { useBreakpoint } = Grid;

const Layout: React.FC = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const screens = useBreakpoint();

  const triggerClickHandle = () => {
    setCollapsed(!collapsed);
    setDrawerVisible(!drawerVisible);
  };

  return (
    <AntLayout
      style={{ minHeight: "100vh" }}
      hasSider={true}
      className={"layout-container"}
    >
      {/* SLIDER */}
      {screens.lg && (
        <Sider
          width="260"
          collapsible={true}
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          trigger={null}
          breakpoint="xl"
          collapsedWidth={!screens.lg ? 0 : 80}
          className={"slider"}
        >
          <Navigation collapsed={collapsed} />
        </Sider>
      )}

      <AntLayout>
        {/* HEADER */}
        <Header className={"header"}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: triggerClickHandle,
            }
          )}

          {!screens.lg && <img src="./images/logo-inverse.png" alt="Logo" />}

          <Dropdown overlay={menu} trigger={["click"]}>
            <div className={"user-dropdown"}>
              <div className={"username"}>MOD Administrator</div>
              <Avatar size="default" icon={<UserOutlined />} src="https://" />
            </div>
          </Dropdown>
        </Header>

        {/* CONTENT BODY */}
        <Content className={"content"}>{props.children}</Content>

        {/* FOOTER */}
        <Footer style={{ textAlign: "center" }}>
          Copyright © JAVAT 365 - {new Date().getFullYear()}
        </Footer>
      </AntLayout>

      {/* DRAWER */}
      {!screens.lg && (
        <Drawer
          placement="left"
          closable={true}
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >
          <Navigation collapsed={false} drawerClose={setDrawerVisible} />
        </Drawer>
      )}
    </AntLayout>
  );
};

export default Layout;

const menu = () => (
  <Menu>
    <Menu.Item key="0">Logout</Menu.Item>
  </Menu>
);
