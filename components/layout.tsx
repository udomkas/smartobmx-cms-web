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

  const renderBreadcrumb = () => {
    const path = router.asPath;
    const pathBreadcrumb = path.split('/');
    const breadcrumbList: any = pathBreadcrumb.map((path, index) => {
      return (
        <Breadcrumb.Item key={`breadcrumbList-${index}`}>
          {path}
        </Breadcrumb.Item>
      );
    });
    return (
      <Breadcrumb style={{ margin: '1rem 0' }}>{breadcrumbList}</Breadcrumb>
    );
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
          defaultSelectedKeys={['menu-1']}
          items={[
            {
              key: 'menu-1',
              icon: <UserOutlined />,
              label: 'Dashboard',
              onClick: (e) => {
                console.log('click ', e, e.key);
                router.push('/dashboard');
              },
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
              children: [
                {
                  key: 'menu-3-1',
                  label: 'Buyer',
                  onClick: () => router.push('/member/buyer'),
                },
                {
                  key: 'menu-3-2',
                  label: 'Seller',
                  onClick: () => router.push('/member/seller'),
                },
              ],
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
              children: [
                {
                  key: 'menu-5-1',
                  label: 'Manage User',
                  onClick: () => router.push('/setting/user'),
                },
                {
                  key: 'menu-5-2',
                  label: 'Manage Role',
                  onClick: () => router.push('/setting/role'),
                },
                {
                  key: 'menu-5-3',
                  label: 'Activity Log',
                  onClick: () => router.push('/setting/log'),
                },
              ],
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
          {renderBreadcrumb()}
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
