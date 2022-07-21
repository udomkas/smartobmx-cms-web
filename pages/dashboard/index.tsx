import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Row,
  Card,
  Statistic,
  Typography,
  Space,
  Divider,
  Tooltip,
} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
// import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/plots';

import { MainLayout } from '../../components/layout';

const { Title, Paragraph, Text, Link } = Typography;

const data = [
  {
    type: 'product1',
    sales: 38,
  },
  {
    type: 'product2',
    sales: 52,
  },
  {
    type: 'product3',
    sales: 61,
  },
  {
    type: 'product4',
    sales: 125,
  },
  {
    type: 'product5',
    sales: 39,
  },
  {
    type: 'product6',
    sales: 99,
  },
];

const config = {
  data,
  xField: 'type',
  yField: 'sales',
  label: {
    //   // 可手动配置 label 数据标签位置
    position: 'middle',
    //   // 'top', 'bottom', 'middle',
    //   // 配置样式
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    type: {
      alias: 'name',
    },
    sales: {
      alias: 'value',
    },
  },
};

const HomePage: NextPage = () => {
  const router = useRouter();
  const [chartData, setChartData]: any = useState();
  useEffect(() => {
    setChartData(config);
  }, []);

  return (
    <MainLayout>
      <Row gutter={48} justify="center" align="middle" className="mb-1">
        <Col span={8}>
          <Card>
            <Row gutter={16}>
              <Col span={12}>
                <Title level={4}>Total Matching</Title>
                <Text type="secondary">from last 7 days</Text>
              </Col>
              <Col span={12}>
                <Title level={2} className="mb-0">
                  5.9K
                </Title>
                <Text type="success">+ 987</Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row gutter={16}>
              <Col span={12}>
                <Title level={4}>Total Buyer</Title>
                <Text type="secondary">from last 7 days</Text>
              </Col>
              <Col span={12}>
                <Title level={2} className="mb-0">
                  2.5K
                </Title>
                <Text type="success">+ 1,123</Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row gutter={16}>
              <Col span={12}>
                <Title level={4}>Total Seller</Title>
                <Text type="secondary">from last 7 days</Text>
              </Col>
              <Col span={12}>
                <Title level={2} className="mb-0">
                  2.5K
                </Title>
                <Text type="success">+ 2,678</Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card>
        <Row gutter={48} justify="center" align="top" className="mb-1">
          <Col span={16}>
            <Title level={3}>Product Value</Title>
            {chartData && <Column {...chartData} />}
          </Col>
          <Col span={8}>
            <Row gutter={24}>
              <Col span={24}>
                <Text strong>Tapico Noodle</Text>
                <br />
                <Text type="secondary">(Cocoa Bean (Thailand) Co., Ltd.)</Text>
                <Row className="mt-1">
                  <Col span={12}>
                    <img src="/img/product/product1.jpg" width={'100'} />
                  </Col>
                  <Col span={12}>
                    <Text>มูลค่าการซื้อของสินค้า</Text>
                    <Title level={3} className="mt-1">
                      999K
                    </Title>
                  </Col>
                </Row>
              </Col>
              <Divider dashed />
              <Col span={24}>
                <Text strong>Royal Jelly Soap</Text>
                <br />
                <Text type="secondary">(Skyworld Co.,Ltd.)</Text>
                <Row className="mt-1">
                  <Col span={12}>
                    <img src="/img/product/product2.jpg" width={'100'} />
                  </Col>
                  <Col span={12}>
                    <Text>มูลค่าการซื้อของสินค้า</Text>
                    <Title level={3} className="mt-1">
                      789K
                    </Title>
                  </Col>
                </Row>
              </Col>
              <Divider dashed />
              <Col span={24}>
                <Text strong>Ovaltine Swiss</Text>
                <br />
                <Text type="secondary">
                  (AB Food and Beverages (thailand) Co.,Ltd)
                </Text>
                <Row className="mt-1">
                  <Col span={12}>
                    <img src="/img/product/product3.jpg" width={'100'} />
                  </Col>
                  <Col span={12}>
                    <Text>มูลค่าการซื้อของสินค้า</Text>
                    <Title level={3} className="mt-1">
                      678K
                    </Title>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </MainLayout>
  );
};

export default HomePage;
