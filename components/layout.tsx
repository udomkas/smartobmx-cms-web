import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb, Button, Col, Layout, Menu, MenuProps, Row } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
  BarChartOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

export const MainLayout = ({ children }: any) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout className="main-layout" style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="main-sider bg-navi-blue"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          className="bg-navi-blue"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'menu-1',
              icon: <UserOutlined />,
              label: 'Dashboard',
              onClick: () => router.push('/'),
            },
            {
              key: 'menu-2',
              icon: <CalendarOutlined />,
              label: 'Appointment',
              onClick: () => router.push('/appointment'),
            },
            {
              key: 'menu-3',
              icon: <TeamOutlined />,
              label: 'Member',
              onClick: () => router.push('/member'),
            },
            {
              key: 'menu-4',
              icon: <BarChartOutlined />,
              label: 'Report',
              onClick: () => router.push('/report'),
            },
            {
              key: 'menu-5',
              icon: <SettingOutlined />,
              label: 'Setting',
              onClick: () => router.push('/setting'),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="bg-white" style={{ padding: '0 1rem' }}>
          <Row justify="end">
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="link" icon={<UserOutlined />}>
                Logout
              </Button>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '0 1rem' }}>
          <Breadcrumb style={{ margin: '1rem 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="bg-white"
            style={{ padding: '1rem', minHeight: '80vh' }}
          >
            {children}
          </Content>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          SMART OBM ©2022 Created by Department of International Trade
          Promotion.
        </Footer>
      </Layout>
    </Layout>
  );
};

export const LoginLayout = ({ children }: any) => {
  return (
    <>
      <h1>Login Layout</h1>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
