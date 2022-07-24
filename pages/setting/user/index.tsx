import {
  Button,
  Col,
  Row,
  Space,
  Table,
  Tag,
  Input,
  Tooltip,
  Typography,
  DatePicker,
  Form,
} from 'antd';
import {
  InfoCircleOutlined,
  FormOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import type { NextPage } from 'next';
import { MainLayout } from '../../../components/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

const { Title, Text } = Typography;
const { Search } = Input;

interface DataType {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const BuyerPage: NextPage = () => {
  const router = useRouter();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} records`,
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => {
        return (
          <Tooltip title={id}>
            <Text>{id}</Text>
          </Tooltip>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'companyName',
      render: (text) => {
        return (
          <Space>
            <Button
              shape="circle"
              icon={<InfoCircleOutlined />}
              onClick={() => router.push('/appointment')}
            />
            <Button shape="circle" type="primary" icon={<FormOutlined />} />
            <Button
              shape="circle"
              type="primary"
              icon={<CalendarOutlined />}
              onClick={() => router.push('/appointment')}
            />
          </Space>
        );
      },
    },
  ];

  const data = [
    {
      id: 'e62ba83b-1150-4548-808b-1f840bf550bf',
      name: 'Gabspot',
      email: 'ajarritt0@who.int',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 'efc985a7-b348-4eed-9526-913bcb68396b',
      name: 'Innotype',
      email: 'ceaves1@sun.com',
      role: 'สคต.',
      status: 'Active',
    },
    {
      id: 'd0762418-5f31-4115-99c1-d0cbd5e1720f',
      name: 'Wordpedia',
      email: 'arodgerson2@dion.ne.jp',
      role: 'สคต.',
      status: 'Active',
    },
    {
      id: '556785ac-10d7-4628-a56c-41abb35bab3e',
      name: 'Camimbo',
      email: 'rcreebo3@jalbum.net',
      role: 'สคต.',
      status: 'Active',
    },
    {
      id: '0ea3436b-1915-4bc8-840a-fa62e7609a10',
      name: 'Muxo',
      email: 'cloch4@github.com',
      role: 'สคต.',
      status: 'Active',
    },
    {
      id: 'd126844d-44bc-44db-bf88-137ff3106132',
      name: 'Voonder',
      email: 'tfahy5@feedburner.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 'b27fbb88-adb3-476a-b2f1-5efb626962bd',
      name: 'Leenti',
      email: 'bfutty6@dailymail.co.uk',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 'a1c25cba-6c73-486c-8bd0-67d54c58263e',
      name: 'Devbug',
      email: 'ifoulks7@drupal.org',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 'af1fed21-6ae8-4373-85d3-bfe16f043d32',
      name: 'Fiveclub',
      email: 'etombleson8@csmonitor.com',
      role: 'สคต.',
      status: 'Inactive',
    },
    {
      id: 'd8e6a3d2-0725-4ce4-a953-90d8f182663b',
      name: 'Avamba',
      email: 'kyoslowitz9@multiply.com',
      role: 'Admin',
      status: 'Active',
    },
  ];

  return (
    <MainLayout>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="">
            <Search
              placeholder="input search text"
              onSearch={() => {}}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item label="Join Date">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={data} pagination={pagination} />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuyerPage;
